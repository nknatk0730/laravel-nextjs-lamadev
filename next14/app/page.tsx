import { Button } from '@/components/ui/button';
import styles from './home.module.css';
import Image from 'next/image';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Our mission is to help you grow your business and achieve your goals.</p>
        <div className={styles.buttons}>
          <Button>Learn More</Button>
          <Button>Contact</Button>
        </div>
        <div className={styles.brands}>
          <Image src='/landscape.png' alt='landscape.png' fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/landscape.png' alt='landscape.png' fill className={styles.heroImg} />
      </div>
      <div></div>
    </div>
  );
}
