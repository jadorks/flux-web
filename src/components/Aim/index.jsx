import React from "react";
import styles from "./aim.module.css";

export default function Aim() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__text}>
          <h2>Fully Decentralized Completely Secure.</h2>
          <p>
            Flux aims to connect all isolated blockchains and establish a
            cross-chain asset exchange network. providing all necessary
            underlying support for the Defi ecosystem. Let every digital asset
            holder experience a truly safe. free and transparent Defi service.
          </p>
          <ul>
            <li>
              <img src="/check.svg" alt="" /> Built by experienced blockchain
              Developers
            </li>
            <li>
              <img src="/check.svg" alt="" />
              Regular review and testing of platform
            </li>
            <li>
              <img src="/check.svg" alt="" />
              Non-custodial and secured
            </li>
          </ul>
        </div>
        <div className={styles.content__image}>
          <img src="/aim.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
