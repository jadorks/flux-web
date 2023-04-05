import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/footer_logo.svg" alt="" />
        <ul className={styles.quick_links}>
          <li>Getting Started</li>
          <li>Support</li>
          <li>FAQ</li>
          <li>Terms Of Service</li>
        </ul>
        <div className={styles.content__footer}>
          <div className={styles.socials}>
            <a href="">
              <img src="/twitter.svg" alt="twitter-icon" />
            </a>
            <a href="">
              <img src="/facebook.svg" alt="facebook-icon" />
            </a>
            <a href="">
              <img src="/instagram.svg" alt="instagram-icon" />
            </a>
          </div>
          <div className={styles.copyright}>
            Copyright © 2023 Flux. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
