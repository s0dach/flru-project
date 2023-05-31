import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const HelpButton = () => {
  const navigate = useNavigate();
  return (
    <div className="help-button-container">
      <div
        className="help-button-text-block-one"
        onClick={() => navigate("/supportmaterials")}
      >
        <span className="help-button-text">Вспомогательные материалы</span>
      </div>
      <div
        className="help-button-text-block-three"
        onClick={() => navigate("/qa")}
      >
        <span className="help-button-text">Вопрос/Ответ</span>
      </div>
    </div>
  );
};
