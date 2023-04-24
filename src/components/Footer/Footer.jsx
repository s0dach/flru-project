import React from "react";
import "./styles.css";
import telegramLogo from "../../assets/images/telegram.png";
import whatsappLogo from "../../assets/images/whatsapp.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-block-one">
        <div>
          <span className="footer-container-block-text-up">Почта</span>
        </div>
        <div className="footer-container-block-one-text-down-block">
          <span className="footer-container-block-text-down">
            info@naporoge.ru
          </span>
        </div>
      </div>
      <div className="footer-container-block-two">
        <div>
          <span className="footer-container-block-text-up">Есть вопросы?</span>
        </div>
        <div className="footer-container-block-two-imgs-block">
          <div className="footer-container-block-two-img-one">
            <img src={telegramLogo} alt="telegramLogo" />
          </div>
          <div className="footer-container-block-two-img-two">
            <img src={whatsappLogo} alt="whatsappLogo" />
          </div>
        </div>
        <div>
          <span className="footer-container-block-text-down">
            +7 (915) 444-44-44
          </span>
        </div>
      </div>
      <div className="footer-container-block-three">
        <div className="footer-container-block-three-text-up-block">
          <span className="footer-container-block-text-up">
            Открытый телеграм чат молодых людей, интересующихся саморазвитием
          </span>
        </div>
        <div className="footer-container-block-three-text-down-block">
          <span className="footer-container-block-text-down">@naporoge</span>
        </div>
      </div>
      <div className="footer-container-block-four">
        <div className="footer-container-block-four-text-up-block">
          <span className="footer-container-block-text-up">
            Сайт проекта “На пороге”
          </span>
        </div>
        <div className="footer-container-block-four-text-down-block">
          <span className="footer-container-block-text-down">naporoge.ru</span>
        </div>
        <div className="footer-container-block-text-down-policy-block">
          <span className="footer-container-block-text-down-policy">
            Политика конфиденциальности и обработки персональных данныхu
          </span>
        </div>
      </div>
    </div>
  );
};
