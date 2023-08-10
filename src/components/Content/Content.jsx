import React from "react";
import { ContentItems } from "../ContentItems/ContentItems";
import { TopContent } from "../TopContent/TopContent";
import styles from "./Content.module.scss";

export const Content = () => {
  return (
    <div className={styles.content}>
      <TopContent />
      <ContentItems />
    </div>
  );
};
