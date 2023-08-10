import React from "react";
import { ShoppingCartIcon } from "../ShoppingCartIcon/ShoppingCartIcon";
import styles from "./HeaderRight.module.scss";

export const HeaderRight = () => {
  return (
    <button className={styles.headerRight}>
      <span className={styles.left}>517 ₽</span>
      <div className={styles.delimiter}></div>
      <div className={styles.right}>
        <ShoppingCartIcon />
        <span>3</span>
      </div>
    </button>
  );
};
