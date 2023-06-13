import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PlanerPage } from "./pages/PlanerPage";
import { TasksPage } from "./pages/TasksPage";
import { AuthPage } from "./pages/AuthPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ResetPassword } from "./pages/ResetPassword";
import { PaymentPage } from "./pages/PaymentPage";
import { SupportMaterialPage } from "./pages/SupportMaterialPage";
import { QuestAnswerPage } from "./pages/QuestAnswerPage";
import { StatsPage } from "./pages/StatsPage";
import { TheoryPage } from "./pages/TheoryPage";
import { VideoPage } from "./pages/VideoPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/theory" element={<TheoryPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/supportmaterials" element={<SupportMaterialPage />} />
        <Route path="/qa" element={<QuestAnswerPage />} />
        <Route path="/profile" element={<ResetPassword />} />
        <Route path="/resetpassword" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/planer" element={<PlanerPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};
