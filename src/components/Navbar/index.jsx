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
            <li>Home</li>
            <li>Dashboard</li>
            <li>Referrals</li>
            <li>About Us</li>
            <li>
              <button>Trade Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
