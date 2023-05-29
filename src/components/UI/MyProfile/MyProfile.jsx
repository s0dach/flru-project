import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="myProfile-container">
      <div
        className="myProfile-text-block-one"
        onClick={() => navigate("/profile")}
      >
        <span className="myProfile-text">Мой профиль</span>
      </div>
      <div
        className="myProfile-text-block-two"
        onClick={() => navigate("/resetpassword")}
      >
        <span className="myProfile-text">Сменить пароль</span>
      </div>
      <div className="myProfile-text-block-three">
        <span className="myProfile-text">Выйти</span>
      </div>
    </div>
  );
};
