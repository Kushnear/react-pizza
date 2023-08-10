import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./NotFound.module.scss";
import emptyShoppingCart from '../../assets/img/ShoppingCartEmpty.png'

export const NotFound = () => {
  const error = useRouteError();
  return (
    <div className={styles.errorPage}>
      <h1> Ничего не найдено 😕</h1>
      <p>
        Произошла ошибка, такой страницы не сущетсвует
      </p>
    </div>
  );
};
