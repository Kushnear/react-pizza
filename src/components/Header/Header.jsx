import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { HeaderLogoGroup } from "../HeaderLogoGroup/HeaderLogoGroup";
import { HeaderRight } from "../HeaderRight/HeaderRight";
import styles from "./Header.module.scss";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <Container>
      <header className={styles.header}>
        <HeaderLogoGroup />
        <HeaderRight />
      </header>
    </Container>
  );
};
