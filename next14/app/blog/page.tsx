import { getPosts } from '@/lib/data';
import { PostCard } from '../components/post-card/post-card'
import styles from './blog.module.css' 

export default async function page() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}
