'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!backendUrl) {
  throw new Error("BACKEND_URL が設定されていません");
}

export const register = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const img = formData.get("img") as File;
    const password = formData.get("password") as string;
    const passwordConfirmation = formData.get("password_confirmation") as string;

  if (!img.size) {
    throw new Error("All fields are required");
  }

  if (password !== passwordConfirmation) {
    throw new Error("Passwords do not match");
  }

  if (!name || !email || !password || !passwordConfirmation || !img) {
    throw new Error("必要な情報が不足しています");
  }
  try {
    const { xsrfToken, laravelSession } = await getCsrfTokenAndSession(
      backendUrl
    );

    if (!xsrfToken || !laravelSession) {
      throw new Error("CSRFトークンとセッションの取得に失敗しました");
    }

    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("img", img);
    form.append("password", password);
    form.append("password_confirmation", passwordConfirmation);

    const res = await fetch(`${backendUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
        Cookie: `laravel_session=${laravelSession}`,
        Accept: "application/json",
      },
      body: form,
    });

    if (!res.ok) {
      throw new Error(`登録に失敗しました: ${res.status} ${res.statusText}`);
    }
    const setCookie = res.headers.get("set-cookie");

    if (!setCookie) {
      throw new Error("Cookie が設定されていません");
    }

    const sessionMatch = setCookie.match(/laravel_session=([^;]+)/);
    const xsrfTokenMatch = setCookie.match(/XSRF-TOKEN=([^;]+)/);

    if (!sessionMatch || !xsrfTokenMatch) {
      throw new Error("Cookie が不正です");
    }

    const cookieStore = await cookies();
    cookieStore.set("laravel_session", sessionMatch[1], { httpOnly: true });
    cookieStore.set("XSRF-TOKEN", xsrfTokenMatch[1], { httpOnly: true });
  } catch (error) {
    console.log("登録中にエラーが発生しました:", error);
    // return { error: "Something went wrong" }
  }

  redirect("/dashboard");
}

export const getCsrfTokenAndSession = async (backendUrl: string) => {
  try {
    const csrfResponse = await fetch(`${backendUrl}/sanctum/csrf-cookie`, { method: "GET" });

    if (!csrfResponse.ok) {
      throw new Error(`CSRF取得エラー: ${csrfResponse.status} ${csrfResponse.statusText}`);
    }

    const setCookieHeader = csrfResponse.headers.get("set-cookie");
    if (!setCookieHeader) {
      throw new Error("CSRF Cookie が取得できませんでした");
    }

    // Cookie 解析処理
    const parseCookie = (name: string) =>
      setCookieHeader
        .split(",")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith(`${name}=`))
        ?.split(";")[0]
        ?.split("=")[1];

    const xsrfToken = parseCookie("XSRF-TOKEN");
    const laravelSession = parseCookie("laravel_session");

    if (!xsrfToken || !laravelSession) {
      throw new Error("必要なCookie情報が不足しています");
    }

    return { xsrfToken, laravelSession };
  } catch (error) {
    console.error("CSRFトークンとセッションの取得中にエラー:", error);
    return { xsrfToken: null, laravelSession: null };
  }
};