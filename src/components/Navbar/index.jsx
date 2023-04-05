import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/flux_logo.svg" alt="logo" />
        </div>
        <div className={styles.nav}>
          <ul className={styles.nav__menu}>
            <li><a href="">Home</a></li>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Referrals</a></li>
            <li><a href="">About Us</a></li>
          </ul>
          <button>Trade Now</button>
        </div>
      </div>
    </div>
  );
}
