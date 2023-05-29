import React from "react";
import { ReactComponent as LogoSvg } from "../../assets/svgs/leftMain.svg";

export const Profile = () => {
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
            placeholder="Старый пароль"
            type="password"
            // type={passwordСipher ? "password" : "text"}
          />
          <input
            className="auth-menu-input"
            placeholder="Новый пароль"
            type="password"
            // type={passwordСipher ? "password" : "text"}
          />
          <input
            className="auth-menu-input"
            placeholder="Повторите новый пароль"
            type="password"
            // type={passwordСipher ? "password" : "text"}
          />
        </div>

        <div className="auth-menu-down-block">
          <div className="auth-menu-button-block">
            <span className="auth-menu-button-block-text">Изменить</span>
          </div>
          <>
            <div className="text-center">
              <span className="auth-menu-down-block-text">Забыли пароль?</span>{" "}
              <span className="auth-menu-down-block-text-reset">Отправить</span>{" "}
              <span className="auth-menu-down-block-text">
                письмо
                <br /> восстановления пароля на почту
              </span>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};
