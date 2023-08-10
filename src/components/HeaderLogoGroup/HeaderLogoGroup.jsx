import React from "react";
import styles from "./HeaderLogoGroup.module.scss";
import { Logo } from "./Logo";

export const HeaderLogoGroup = () => {
  return (
    <div className={styles.logoGroup}>
      <Logo />
      <div className={styles.right}>
        <h3>React pizza</h3>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
};
