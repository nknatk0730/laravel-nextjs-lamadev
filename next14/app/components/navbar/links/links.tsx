'use client';

import { Button } from "@/components/ui/button";
import styles from "./links.module.css";
import { NavLink } from "./nav-link/nav-link";
import { useState } from "react";

export const Links = () => {

  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <Button>Logout</Button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Button className='md:hidden' onClick={() => setOpen((prev) => !prev)}>Menu</Button>
      {
        open && (
          <div className={styles.mobileLinks}>
            {links.map((link => (
              <NavLink item={link} key={link.title} />
            )))}
          </div>
        )
      }
    </div>
  );
}