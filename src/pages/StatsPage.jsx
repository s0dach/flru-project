import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Stats } from "../components/Stats/Stats";

export const StatsPage = () => {
  return (
    <>
      <Header active={"Статистика"} />
      <Stats />
      <Footer />
    </>
  );
};
