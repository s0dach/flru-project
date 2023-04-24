import React from "react";
import "./styles.css";
import { ReactComponent as LeftMainSvg } from "../../assets/svgs/leftMain.svg";
import { ReactComponent as QuestionSvg } from "../../assets/svgs/question.svg";
import { ReactComponent as PeopleSvg } from "../../assets/svgs/people.svg";

export const Header = () => {
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
    <div className="header-container">
      <div className="header-menu-block">
        <div className="header-menu-left-block">
          <LeftMainSvg />
        </div>
        <div className="header-menu-middle-block">
          {MiddleTextArr.map((text, index) => {
            return (
              <div className="header-menu-middle-text-block" key={index}>
                <span className="header-menu-middle-text">{text}</span>
              </div>
            );
          })}
        </div>
        <div className="header-menu-right-block">
          <div className="header-menu-right-block-svg">
            <QuestionSvg />
          </div>
          <div>
            <PeopleSvg />
          </div>
        </div>
      </div>
    </div>
  );
};
