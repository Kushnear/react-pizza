import { React, useState } from "react";
import { PlusIcon } from "../PlusIcon/PlusIcon";
import styles from "./PizzaCard.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PizzaCard = ({
  id,
  imgURL,
  title,
  types,
  sizes,
  price,
  category,
  rating,
  loading,
}) => {
  const [doughSelectedIndex, setDoughSelectedIndex] = useState(types[0]);
  const [sizeSelected, setSizeSelected] = useState(sizes[0]);
  const [itemCounter, setItemCounter] = useState(0);

  const hadleDoughSelect = (id) => {
    setDoughSelectedIndex(id);
  };
  const handleSizeSelect = (size) => {
    setSizeSelected(size);
  };
  const handleAddItem = () => {
    setItemCounter(itemCounter + 1);
  };

  return (
    <div className={styles.pizzaCard}>
      <img className={styles.img} src={imgURL} alt="pizza" />
      {/* {!isloading && console.log("loading") && <Skeleton style={{width: "100%",height: "150px", borderRadius: "50%"}}/>} */}
      <div className={styles.middle}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.selector}>
          <ul className={styles.doughSelector}>
            {["тонкое", "традиционное"].map((element, index) => {
              return (
                <li
                  key={index}
                  onClick={() =>
                    types.includes(index) && hadleDoughSelect(index)
                  }
                  className={`${types.includes(index) && styles.available} ${
                    doughSelectedIndex === index && styles.active
                  }`}
                >
                  {element}
                </li>
              );
            })}
          </ul>
          <ul className={styles.sizeSelector}>
            {[26, 30, 40].map((element, index) => {
              return (
                <li
                  key={index}
                  className={`${sizes.includes(element) && styles.available} ${
                    sizeSelected === element && styles.active
                  } `}
                  onClick={() =>
                    sizes.includes(element) && handleSizeSelect(element)
                  }
                >
                  {element} см
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>{`от ${price} ₽`}</div>
        <button
          className={styles.addBtn}
          onClick={() => itemCounter <= 89 && handleAddItem()}
        >
          <PlusIcon />
          <span>Добавить</span>
          {itemCounter > 0 && (
            <div className={styles.counter}>
              <span>{itemCounter}</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
