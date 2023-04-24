import React from "react";
import "./styles.css";
import { ReactComponent as LeftMainSvg } from "../../../assets/svgs/leftMain.svg";
import { ReactComponent as QuestionSvg } from "../../../assets/svgs/question.svg";
import { ReactComponent as PeopleSvg } from "../../../assets/svgs/people.svg";
import { useNavigate } from "react-router-dom";

export const HomeMain = () => {
  const navigate = useNavigate();
  const MiddleTextArr = [
    "Задания",
    "Дневник",
    "Планер",
    "Статистика",
    "Видео",
    "Теория",
    "Конспекты",
  ];
  return (
    <div className="homeMain-container">
      <div className="homeMain-menu-block">
        <div className="homeMain-menu-left-block">
          <LeftMainSvg />
        </div>
        <div className="homeMain-menu-middle-block">
          {MiddleTextArr.map((text, index) => {
            if (text === "Планер") {
              return (
                <div
                  className="homeMain-menu-middle-text-block"
                  key={index}
                  onClick={() => navigate("/planer")}
                >
                  <span className="homeMain-menu-middle-text">{text}</span>
                </div>
              );
            }
            return (
              <div className="homeMain-menu-middle-text-block" key={index}>
                <span className="homeMain-menu-middle-text">{text}</span>
              </div>
            );
          })}
        </div>
        <div className="homeMain-menu-right-block">
          <div className="homeMain-menu-right-block-svg">
            <QuestionSvg />
          </div>
          <div>
            <PeopleSvg />
          </div>
        </div>
      </div>
      <div className="homeMain-center-block">
        <div className="homeMain-center-text-up-block">
          {/* со шрифтом траблы */}
          <span className="homeMain-center-text-up">
            Развитие самоэффективности.pro
          </span>
        </div>
        <div className="homeMain-center-text-down-block">
          <span className="homeMain-center-text-down">
            С другой стороны консультация с широким активом влечет за собой
            процесс внедрения и модернизации системы обучения кадров,
            соответствует насущным потребностям.
          </span>
        </div>
        <div className="homeMain-center-button-block">
          <span className="homeMain-center-button-text">
            Начни новую жизнь с понедельника!
          </span>
        </div>
      </div>
    </div>
  );
};
