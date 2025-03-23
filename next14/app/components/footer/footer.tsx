import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lamadev</div>
      <div className={styles.text}>
        © 2025 Lama Creative thoughts agency. All rights reserved
      </div>
    </div>
  );
}