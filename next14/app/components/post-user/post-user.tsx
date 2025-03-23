import { getUser } from '@/lib/data';
import styles from './post-user.module.css';
import Image from 'next/image';

// export type User = {
//   id: string,
//   name: string,
//   username: string,
//   email: string,
//   address: {
//     street: string,
//     suite: string,
//     city: string,
//     zipcode: string,
//     geo: {
//       lat: string,
//       lng: string
//     }
//   },
//   phone: string,
//   website: string,
//   company: {
//     name: string,
//     catchPhrase: string,
//     bs: string
//   }
// }

// const getUser = async (userId: string): Promise<User> => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return res.json();
// }

export const PostUser = async ({
  user_id
}: {
  user_id: string
}) => {
  const user = await getUser(user_id);

  if (!user) {
    return <div>User not found</div> 
  }

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/landscape.png"}
        alt="avatar"
        className={styles.avatar}
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.name}</span>
      </div>
    </div>
  );
}