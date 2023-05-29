import React from "react";
import { Header } from "../components/Header/Header";
import { Profile } from "../components/Profile/Profile";
import { Footer } from "../components/Footer/Footer";
import { ProfileReset } from "../components/Profile/ProfileReset";

export const ResetPassword = () => {
  return (
    <>
      <Header />
      <ProfileReset />
      <Footer />
    </>
  );
};
