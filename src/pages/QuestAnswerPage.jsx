import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { QuestAnswer } from "../components/Help/Q&A/QuestAnswer";

export const QuestAnswerPage = () => {
  return (
    <>
      <Header />
      <QuestAnswer />
      <Footer />
    </>
  );
};
