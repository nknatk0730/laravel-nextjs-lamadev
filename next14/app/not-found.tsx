import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <div>not-found</div>

      <Link href="/">
        Go back to home
      </Link>
    </div>
  );
}
