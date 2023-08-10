import React from "react";
import styles from "./ContentItems.module.scss";
// import pizzas from "../../assets/pizzas.json";
import { Container } from "../Container/Container";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PizzaCardSkeleton } from "../PizzaCardSkeleton/PizzaCardSkeleton";

export const ContentItems = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6475d169e607ba4797dcaaa2.mockapi.io/pizzas"
        );
        setPizzas(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Все пиццы</h1>
      <div className={styles.contentItems}>
        {isLoading ? (
          [...Array(6)].map((el, i) => <PizzaCardSkeleton key={i} /> )
        ) : (
          pizzas.map((pizza, i) => (
            <PizzaCard
              key={pizza.id}
              imgURL={pizza.imageUrl}
              title={pizza.title}
              price={pizza.price}
              types={pizza.types}
              sizes={pizza.sizes}
              loading={isLoading}
            />
          ))
        )}
      </div>
    </Container>
  );
};
