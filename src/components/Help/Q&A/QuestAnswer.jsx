import React from "react";
import "./styles.css";
import { ReactComponent as HelpAct } from "../../../assets/svgs/help/helpbuttonAct.svg";
import { ReactComponent as HelpDis } from "../../../assets/svgs/help/helpbuttonDis.svg";

export const QuestAnswer = () => {
  const [state, setState] = React.useState(false);
  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  return (
    <div className="quest-answer-container">
      <div>
        <div className="quest-answer-text-block">
          <span className="quest-answer-text">Вопрос/Ответ</span>
        </div>
        <div className="quest-answer-section-block">
          <div className="quest-answer-item-block">
            <div
              className={
                state
                  ? "quest-answer-item-child-block"
                  : "quest-answer-item-child-block-non"
              }
            >
              <span className="quest-answer-item-child-block-text">
                Когда встречи с ведущим?
              </span>

              <div onClick={() => setState(!state)}>
                {!state ? <HelpDis /> : <HelpAct />}
              </div>
            </div>
            {state && (
              <div className="quest-answer-item-child-two-block">
                <span className="quest-answer-item-child-block-text-two">
                  Встречи с ведущим проходят на выходных. Время встреч вы
                  узнаете после записи в группу. Группы стартуют даже с 1-им
                  человеком.
                </span>
              </div>
            )}
          </div>
          <div className="quest-answer-item-block-mt">
            <div
              className={
                state1
                  ? "quest-answer-item-child-block"
                  : "quest-answer-item-child-block-non"
              }
            >
              <span className="quest-answer-item-child-block-text">
                Что может дать мне курс саморазвития?
              </span>

              <div onClick={() => setState1(!state1)}>
                {!state1 ? <HelpDis /> : <HelpAct />}
              </div>
            </div>
            {state1 && (
              <div className="quest-answer-item-child-two-block">
                <span className="quest-answer-item-child-block-text-two">
                  Встречи с ведущим проходят на выходных. Время встреч вы
                  узнаете после записи в группу. Группы стартуют даже с 1-им
                  человеком.
                </span>
              </div>
            )}
          </div>
          <div className="quest-answer-item-block-mt">
            <div
              className={
                state2
                  ? "quest-answer-item-child-block"
                  : "quest-answer-item-child-block-non"
              }
            >
              <span className="quest-answer-item-child-block-text">
                Зачем нужен планер?
              </span>

              <div onClick={() => setState2(!state2)}>
                {!state2 ? <HelpDis /> : <HelpAct />}
              </div>
            </div>
            {state2 && (
              <div className="quest-answer-item-child-two-block">
                <span className="quest-answer-item-child-block-text-two">
                  Встречи с ведущим проходят на выходных. Время встреч вы
                  узнаете после записи в группу. Группы стартуют даже с 1-им
                  человеком.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
