import Image from "next/image";
import styles from "./single-post.module.css";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import Link from "next/link";
import { PostUser } from "@/app/components/post-user/post-user";
import { format } from "date-fns";

// const getData = async (slug: string): Promise<Post> => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return res.json();
// }

export const generateMetadata = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function page({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params;

  // const post = await getData(slug);
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found
      <Link href="/blog">Back to blog</Link>
    </div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/landscape.png"
          alt="landscape.png"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser user_id={post.user_id} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {format(post.created_at, "yyyy-MM-dd")}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
