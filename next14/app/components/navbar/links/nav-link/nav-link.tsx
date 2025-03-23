'use client';

import Link from 'next/link';
import styles from './nav-link.module.css';
import { usePathname } from 'next/navigation';

export const NavLink = ({ item }: { item: { title: string, path: string; } }) => {

  const pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
  );
}