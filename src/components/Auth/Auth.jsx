import React from "react";
import "./styles.css";
import { ReactComponent as LogoSvg } from "../../assets/svgs/leftMain.svg";
import { ReactComponent as CheckBoxAct } from "../../assets/svgs/stats/checkboxactauth.svg";
import { ReactComponent as CheckBoxDis } from "../../assets/svgs/stats/checkboxdisauth.svg";

export const Auth = () => {
  //   const [passwordСipher, setPasswordСipher] = React.useState(false);
  const [registration, setRegistration] = React.useState(true);
  const [restore, setRestore] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [state1, setState1] = React.useState(false);
  return (
    <div className="auth-container">
      {/* {restore && (
        <div
          className="auth-back-block"
          onClick={() => {
            setRestore(false);
            setRegistration(false);
          }}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.05028 5.65696L6.87285 9.62655C7.21289 9.97968 7.21289 10.5385 6.87284 10.8916C6.51416 11.2641 5.91785 11.2641 5.55916 10.8916L1.18637 6.3506C0.813459 5.96335 0.813458 5.35057 1.18636 4.96332L5.55916 0.422341C5.91784 0.0498598 6.51416 0.0498594 6.87284 0.422341C7.21289 0.775464 7.21289 1.33425 6.87284 1.68737L3.05028 5.65696Z"
              fill="#C2C9D1"
            />
          </svg>

          <span className="auth-back-block-text">Назад</span>
        </div>
      )} */}
      <div className="auth-menu-block">
        <div className="auth-menu-up-block">
          {restore ? (
            <>
              <span className="auth-menu-up-block-text-restore">
                Восстановление пароля
              </span>
              <p className="auth-menu-up-block-text-two-restore">
                Введите почту, указанную при регистрацию, на которую будет
                отправлена ссылка для восстановления доступа
              </p>
            </>
          ) : (
            <>
              <LogoSvg />
              <span className="auth-menu-up-block-text">
                {registration ? "Регистрация" : "Вход"}
              </span>
            </>
          )}
        </div>
        <div className="auth-menu-inputs-block">
          {registration && (
            <input className="auth-menu-input" placeholder="Имя" />
          )}
          <input
            className="auth-menu-input"
            placeholder="E-mail"
            type="email"
          />
          {!restore && (
            <input
              className="auth-menu-input"
              placeholder="Пароль"
              type="password"
              // type={passwordСipher ? "password" : "text"}
            />
          )}
        </div>
        {registration && (
          <>
            <div className="auth-menu-policy-block">
              <div className="auth-menu-policy-block-checkbox-block">

                   {state ? <CheckBoxAct onClick={() => setState(!state)}/> : <CheckBoxDis onClick={() => setState(!state)}/>}   
           
                <div className="auth-menu-policy-block-checkbox-block-child">
                  <span className="auth-menu-policy-block-checkbox-block-text">
                    Согласен с
                  </span>{" "}
                  <a
                    className="auth-menu-policy-block-checkbox-block-text-two"
                    href="/policy"
                  >
                    Политикой обработки персональных данных и правила
                    пользования сайтом
                  </a>
                </div>
              </div>
            </div>
            <div className="auth-menu-policy-block-two">
              <div className="auth-menu-policy-block-checkbox-block">
                <div className="checkmark-height" onClick={() => setState1(!state1)}>
                {state1 ? <CheckBoxAct/> : <CheckBoxDis/>}   
                </div>
                <div className="auth-menu-policy-block-checkbox-block-child">
                  <a
                    className="auth-menu-policy-block-checkbox-block-text-two"
                    href="/policy"
                  >
                    Подтвердите, что вы не робот
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="auth-menu-down-block">
          <div className="auth-menu-button-block">
            {restore ? (
              <span className="auth-menu-button-block-text">Восстановить</span>
            ) : (
              <span className="auth-menu-button-block-text">
                {registration ? "Зарегистрироваться" : "Войти"}
              </span>
            )}
          </div>
          {!restore && (
            <>
              <div>
                <span className="auth-menu-down-block-text">
                  {registration
                    ? `У вас уже есть аккаунт?${" "}`
                    : `Забыли пароль?${" "}`}
                </span>
                {registration ? (
                  <span
                    className="auth-menu-down-block-text-two"
                    onClick={() => setRegistration(false)}
                  >
                    Войти
                  </span>
                ) : (
                  <span
                    className="auth-menu-down-block-text-two"
                    onClick={() => setRestore(true)}
                  >
                    Восстановить
                  </span>
                )}
              </div>
              {!registration && (
                <span className="noacc" onClick={() => setRegistration(true)}>
                  Нет аккаунта?
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
