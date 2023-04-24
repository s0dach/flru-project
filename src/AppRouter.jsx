import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlanerPage } from "./pages/PlanerPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planer" element={<PlanerPage />} />
      </Routes>
    </BrowserRouter>
  );
};
