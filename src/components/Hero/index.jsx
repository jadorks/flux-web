import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero__text}>
          <p>Unified Product, Simplified Trading</p>
          <h1>A Fully Decentralized Perpetual Exchange</h1>
          <p>
            An Extended Decentralized Exchange with first ever C-Dex Protocol
          </p>
        </div>
        <div className={styles.hero__buttons}>
          <button>
            <span>Testnet</span> Start Trading
          </button>
          <button>Add Liquidity</button>
        </div>
      </div>
      <div className={styles.container__ellipses}>
        <div className={styles.ellipses__inner}>
          <img src="/elements/ellipses/ellipse_center_1.png" alt="" />
          <img src="/elements/ellipses/ellipse_left_1.png" alt="" />
          <img src="/elements/ellipses/ellipse_left_2.png" alt="" />
          <img src="/elements/ellipses/ellipse_left_3.png" alt="" />
          <img src="/elements/ellipses/ellipse_left_4.png" alt="" />
          <img src="/elements/ellipses/ellipse_right_1.png" alt="" />
          <img src="/elements/ellipses/ellipse_right_2.png" alt="" />
          <img src="/elements/ellipses/ellipse_right_3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
