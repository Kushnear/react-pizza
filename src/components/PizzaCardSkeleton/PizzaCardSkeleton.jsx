import React from "react";
import styles from "./PizzaCardSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PizzaCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <Skeleton
        style={{
          height: "280px",
          borderRadius: "50%",
          maxWidth: "100%",
          marginBottom: "16px",
        }}
      />
      <Skeleton
        style={{ height: "24px", maxWidth: "100%", marginBottom: "13px", borderRadius: "10px" }}
      />
      <Skeleton style={{ height: "104px", maxWidth: "100%", marginBottom: "13px", borderRadius: "10px"}} />
      <div className={styles.bottom}>
        <Skeleton style={{ height: "44px", width: "88px", borderRadius: "10px" }} />
        <Skeleton style={{ height: "44px", width: "127px", borderRadius: "30px" }} />
      </div>
    </div>
  );
};
