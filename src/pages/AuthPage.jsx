import React from "react";
import { Auth } from "../components/Auth/Auth";
import { Footer } from "../components/Footer/Footer";
import { HomeMain } from "../components/Home/HomeMain/HomeMain";
import { Header } from "../components/Header/Header";

export const AuthPage = () => {
  return (
    <>
      <Header />
      <Auth />
      <Footer />
    </>
  );
};
