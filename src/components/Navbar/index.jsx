import React, { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img
            className="cursor-pointer lg:hidden"
            onClick={() => {
              setMobileMenuOpened(true);
            }}
            src="/hamburger.svg"
            alt=""
          />
          <img src="/flux_logo.svg" alt="logo" />
        </div>

        <div className={styles.nav}>
          <ul className={styles.nav__menu}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Referrals</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
          <button>Trade Now</button>
        </div>
      </div>
      {mobileMenuOpened &&
        (<div className={styles.nav_mobile}>
          <div className="flex gap-4 font-poppins text-white text-[21px]">
            <img
              className="cursor-pointer"
              onClick={() => {
                setMobileMenuOpened(false);
              }}
              src="/close.svg"
              alt=""
            />
            <h2>Menu</h2>
          </div>
          <div className={styles.nav__menu_mobile}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Referrals</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
        </div>)
      }
    </div>
  );
}
