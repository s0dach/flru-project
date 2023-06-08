import React from "react";
import "./styles.css";
import { ReactComponent as ArrowActSvg } from "../../../assets/svgs/taskssvg/arrowblueact.svg";
import { ReactComponent as ArrowDisSvg } from "../../../assets/svgs/taskssvg/arrowbluedis.svg";

export const TasksTarget = () => {
  const [arrowAct, setArrowAct] = React.useState(false);
  return (
    <div className="tasks-target-container">
      <div className="tasks-target-block">
        <div className="tasks-target-first-block">
          <span className="tasks-target-block-text">
            1. Знаю ли я четко, что именно хочу получить в итоге прохождения
            данного курса развития себя?
          </span>
          <div className="tasks-target-textarea-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="tasks-target-next-block">
          <span className="tasks-target-block-text">
            1. Знаю ли я четко, что именно хочу получить в итоге прохождения
            данного курса развития себя?
          </span>
          <div className="tasks-target-textarea-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="tasks-target-next-block">
          <span className="tasks-target-block-text">
            1. Знаю ли я четко, что именно хочу получить в итоге прохождения
            данного курса развития себя?
          </span>
          <div className="tasks-target-textarea-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="tasks-target-next-block">
          <span className="tasks-target-block-text">
            1. Знаю ли я четко, что именно хочу получить в итоге прохождения
            данного курса развития себя?
          </span>
          <div className="tasks-target-textarea-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="tasks-target-next-block">
          <span className="tasks-target-block-text">
            1. Знаю ли я четко, что именно хочу получить в итоге прохождения
            данного курса развития себя?
          </span>
          <div className="tasks-target-textarea-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="tasks-target-button">Сохранить</div>
      </div>
      <div className="tasks-target-block-two">
        <div className="tasks-target-two-text-block">
          <span className="tasks-target-two-text">
            Краткая схема развития себя
          </span>
        </div>
        <div className="tasks-target-two-menu-block">
          <div className="tasks-target-two-menu-text-block">
            <span className="tasks-target-two-menu-text">
              Главные моменты процесса развития себя
            </span>
            <div onClick={() => setArrowAct(!arrowAct)}>
              {arrowAct ? <ArrowActSvg /> : <ArrowDisSvg />}
            </div>
          </div>
          {arrowAct && (
            <div className="tasks-target-two-menu-text-block-down">
              <div className="tasks-target-two-menu-text-down-block-rod">
                <span className="tasks-target-two-menu-text-down">
                  1. Наличие четкой цели – что именно мне нужно развить в себе?
                </span>
              </div>
              <div className="tasks-target-two-menu-text-down-block">
                <span className="tasks-target-two-menu-text-down">
                  2. Знание факта – развитие происходит в процессе новой,
                  непривычной деятельности, которую явно труднее осуществлять,
                  чем привычные действия.
                  <br />
                  Трудность – необходимое условие появления новых качеств,
                  способностей.
                </span>
              </div>
              <div className="tasks-target-two-menu-text-down-block">
                <span className="tasks-target-two-menu-text-down">
                  1. Наличие четкой цели – что именно мне нужно развить в себе?
                </span>
              </div>
              <div className="tasks-target-two-menu-text-down-block">
                <span className="tasks-target-two-menu-text-down">
                  1. Наличие четкой цели – что именно мне нужно развить в себе?
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
