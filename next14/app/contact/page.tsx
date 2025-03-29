// 'use client';

import Image from 'next/image'
import styles from './contact.module.css'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Next App Contact Page',
  description: 'This is the contact page of the Next App',
}

export default function page() {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/landscape.png' alt='contact.png' fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Phone Number (Optional)' />
          <textarea name="" id="" placeholder='Message'></textarea>
          <Button>Send</Button>
        </form>
      </div>
    </div>
  )
}
