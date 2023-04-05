import React from "react";
import styles from "./features.module.css";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Take Full Advantage of Everything Layer 2 Has to Offer</h2>
        <div className={styles.features}>
          <ul className={styles.features__list}>
            <li>
              <img src="/check.svg" alt="" /> Say goodbye to high gas fees
            </li>
            <li>
              <img src="/check.svg" alt="" /> Execute your trades instantly
            </li>
            <li>
              <img src="/check.svg" alt="" /> Trade from any device
            </li>
          </ul>
          <ul className={styles.features__list}>
            <li>
              <img src="/check.svg" alt="" /> Stay completely secure with
              optimistic rollups
            </li>
            <li>
              <img src="/check.svg" alt="" /> Gain leveraged exposure on
              limitless assets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
