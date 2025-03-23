import Link from "next/link";
import { Links } from "./links/links";
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}