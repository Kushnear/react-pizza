import React from "react";
import styles from "./Sort.module.scss";
import { useState } from "react";

export const Sort = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [sortedBy, setSortedBy] = useState(0);

  const sortOptions = [
    { text: "по популярности" },
    { text: "по цене" },
    { text: "по афлавиту" },
  ];

  const handleOpenPopup = () => {
    setIsOpened(!isOpened);
  };

  const handleClickPopup = (i) => {
    setSortedBy(i)
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.triangle}></div>
      <p className={styles.sortBy}>Сортировка по:</p>
      <span onClick={handleOpenPopup} className={styles.sortOption}>
        {sortOptions[sortedBy].text}
      </span>

      {isOpened && (
        <ul className={styles.popup}>
          {sortOptions.map((option, i) => (
            <li key={i} onClick={() => handleClickPopup(i)} className={`${styles.popupItem} ${sortedBy === i ? styles.active : ''}`}>
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
