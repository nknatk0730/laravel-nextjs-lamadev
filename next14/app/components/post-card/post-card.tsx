import Image from 'next/image';
import styles from './post-card.module.css';
import Link from 'next/link';
import { Post } from '@/types/post';

export const PostCard = ({
  post
}: {
  post: Post
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='/landscape.png' alt='landscape' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.description}</p>
        <Link className='underline' href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  );
}