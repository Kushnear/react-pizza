import React from "react";
import styles from "./Categories.module.scss";
import { useState } from "react";

const categories = [
  {
    text: "все",
  },
  {
    text: "мясные",
  },
  {
    text: "вегетарианские",
  },
  {
    text: "гриль",
  },
  {
    text: "острые",
  },
  {
    text: "закрытые",
  },
];

export const Categories = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <ul className={styles.categories}>
      {categories.map((item, index) => (
        <li
          key={index}
          className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
          onClick={() => handleClick(index)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};
