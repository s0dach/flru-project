import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Theory } from "../components/Theory";

export const TheoryPage = () => {
  return (
    <>
      <Header active={"Теория"}/>
      <Theory />
      <Footer />
    </>
  );
};