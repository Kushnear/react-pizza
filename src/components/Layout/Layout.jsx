import React from "react";
import { Header } from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
