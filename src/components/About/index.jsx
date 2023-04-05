import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.about__text}>
          <h2>Home for Defi</h2>
          <p>
            Trade against zero spread and deep liquidity with advanced order
            types such as limit, stop-loss, and more Earn fees for providing
            liquidity in one click
          </p>
        </div>
        <div className={styles.about__cards}>
          <div className={styles.card}>
            <img className={styles.card__glow} src="/card_1_glow.png" alt="" />
            <img src="/orderbook.svg" alt="" />
            <div className={styles.card__body}>
              <h3>C-Dex Advanced Orderbook</h3>
              <p>
                Trade using limit order, market order, Stop Loss Order features
                on advanced orderbook.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__image}>
              <img
                className={styles.card__glow}
                src="/card_2_glow.png"
                alt=""
              />
              <img src="/trading.svg" alt="" />
            </div>
            <div className={styles.card__body}>
              <h3>Perpetual Trading</h3>
              <p>
                Trade perpetual contracts with up to 30x leverage with minimum
                fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
