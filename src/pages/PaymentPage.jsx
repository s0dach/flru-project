import React from "react";
import { Payment } from "../components/Payment/Payment";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const PaymentPage = () => {
  return (
    <>
      <Header />
      <Payment />
      <Footer />
    </>
  );
};
