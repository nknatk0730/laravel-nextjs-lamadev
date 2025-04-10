import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: 'Next App About Page',
  description: 'This is the About page of the Next App',
}

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better.
          We believe in good ideas flexibility and precision We&apos;re world&apos;s 
          Our Special Team best consulting & finance solution provider. Wide range of
          web and software development services across the world.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/landscape.png' alt="About Image" fill className={styles.img} />
      </div>
    </div>
  )
}
