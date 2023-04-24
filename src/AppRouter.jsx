import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlanerPage } from "./pages/PlanerPage";
import { TasksPage } from "./pages/TasksPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planer" element={<PlanerPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};
