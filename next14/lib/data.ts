import { Post } from "@/types/post";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!backendUrl) {
  throw new Error('Backend URL is not set');
}

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch(`${backendUrl}/api/posts`);

    const data = await res.json();

    const posts = data.posts;

    return posts;

  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

export const getPost = async (slug: string): Promise<Post> => {
  try {
    const res = await fetch(`${backendUrl}/api/posts/${slug}`);

    const data = await res.json();

    const post = data.post;

    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post');
  }
}

export const getUser = async (user_id: string) => {
  try {
    const res = await fetch(`${backendUrl}/api/users/${user_id}`, {
      headers: {
        Accept: 'application/json',
      }
    });

    const data = await res.json();
    
    const user = data.user;

    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

export const getUsers = async () => {
  try {
    const res = await fetch(`${backendUrl}/api/users`);

    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}