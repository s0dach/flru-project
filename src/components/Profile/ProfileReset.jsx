import React from "react";
import { ReactComponent as LogoSvg } from "../../assets/svgs/leftMain.svg";
import "./styles.css";

export const ProfileReset = () => {
  return (
    <div className="resetPass-container">
      <div className="auth-menu-block">
        <div className="auth-menu-up-block">
          <>
            <LogoSvg />
            <span className="auth-menu-up-block-text">Сменить пароль</span>
          </>
        </div>
        <div className="auth-menu-inputs-block">
          <input
            className="auth-menu-input"
            value="nikita"
            // type={passwordСipher ? "password" : "text"}
          />
          <input
            className="auth-menu-input"
            value="test@mail.ru"
            type="email"
            // type={passwordСipher ? "password" : "text"}
          />
        </div>
        <div className="reset-time-block">
          <span className="reset-time-block-text">Часовой пояс:</span>
          <div className="reset-time-block-time">GMT +10 (Владивосток)</div>
        </div>
        <div className="auth-menu-down-block">
          <div className="auth-menu-button-block">
            <span className="auth-menu-button-block-text">Сохранить</span>
          </div>
        </div>
      </div>
      <div className="deleteAcc">Удалить аккаунт</div>
    </div>
  );
};
