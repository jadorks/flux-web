import React from "react";
import styles from "./orderbook.module.css";

export default function Orderbook() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src="/orderbook_glow_1.png" alt="" />
          <img src="/orderbook_glow_2.png" alt="" />
          <img src="/orderbook_glow_3.png" alt="" />
          <img src="/advanced_orderbook.svg" alt="" />
          <div className={styles.card__body}>
            <h2>C-Dex Advanced Orderbook</h2>
            <p>User buy and sell crypto directly to / from the</p>
            <p>
              self custodial wallet of their choice. No Deposits, only. direct
              crypto-flat transfers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
