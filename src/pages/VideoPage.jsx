import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { VideoComponent } from "../components/Videos";

export const VideoPage = () => {
  return (
    <>
      <Header active={"Видео"} />
      <VideoComponent />
      <Footer />
    </>
  );
};
