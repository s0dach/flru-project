import React from "react";
import "./styles.css";

export const PlanerMission = () => {
  // 1 блок
  const [zeroOne, setZeroOne] = React.useState(false);
  const [weakOne, setWeakOne] = React.useState(false);
  const [mediumOne, setMediumOne] = React.useState(false);
  const [strongOne, setStrongOne] = React.useState(false);

  // 2 блок
  const [zeroTwo, setZeroTwo] = React.useState(false);
  const [weakTwo, setWeakTwo] = React.useState(false);
  const [mediumTwo, setMediumTwo] = React.useState(false);
  const [strongTwo, setStrongTwo] = React.useState(false);
  return (
    <div className="planer-mission-container">
      <div className="planer-mission-container-text-block">
        <div className="planer-mission-container-mission-block">
          <span className="planer-mission-container-mission-block-text">
            Название дела
          </span>
        </div>
      </div>
      <div className="planer-mission-container-bottom-up-block">
        <div className="planer-mission-block-up">
          <span className="planer-mission-block-up-text">Объем выполнения</span>
          <div className="planer-mission-block-up-status">80%</div>
        </div>
        <div className="planer-mission-block-up">
          <span className="planer-mission-block-up-text">Сила желания</span>
          <div className="planer-mission-block-radio-status">
            <div
              className="planer-mission-block-radio-block"
              onClick={() => {
                setZeroOne(true);
                setWeakOne(false);
                setMediumOne(false);
                setStrongOne(false);
              }}
            >
              <div
                className={
                  !zeroOne
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!zeroOne ? "radio-text" : "radio-text-act"}>
                Ноль
              </span>
            </div>
            <div
              className="planer-mission-block-radio-block-ml"
              onClick={() => {
                setWeakOne(true);
                setMediumOne(false);
                setStrongOne(false);
                setZeroOne(false);
              }}
            >
              <div
                className={
                  !weakOne
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!weakOne ? "radio-text" : "radio-text-act"}>
                Слабо
              </span>
            </div>
            <div
              className="planer-mission-block-radio-block-ml"
              onClick={() => {
                setMediumOne(true);
                setStrongOne(false);
                setWeakOne(false);
                setZeroOne(false);
              }}
            >
              <div
                className={
                  !mediumOne
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!mediumOne ? "radio-text" : "radio-text-act"}>
                Средне
              </span>
            </div>
            <div
              className="planer-mission-block-radio-block-ml"
              onClick={() => {
                setStrongOne(true);
                setWeakOne(false);
                setMediumOne(false);
                setZeroOne(false);
              }}
            >
              <div
                className={
                  !strongOne
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!strongOne ? "radio-text" : "radio-text-act"}>
                Сильно
              </span>
            </div>
          </div>
        </div>
        <div className="planer-mission-block-up">
          <span className="planer-mission-block-up-text">Сила нежелания</span>
          <div className="planer-mission-block-radio-status">
            <div
              className="planer-mission-block-radio-block"
              onClick={() => {
                setZeroTwo(true);
                setWeakTwo(false);
                setMediumTwo(false);
                setStrongTwo(false);
              }}
            >
              <div
                className={
                  !zeroTwo
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!zeroTwo ? "radio-text" : "radio-text-act"}>
                Ноль
              </span>
            </div>
            <div
              className="planer-mission-block-radio-block-ml"
              onClick={() => {
                setWeakTwo(true);
                setMediumTwo(false);
                setStrongTwo(false);
                setZeroTwo(false);
              }}
            >
              <div
                className={
                  !weakTwo
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!weakTwo ? "radio-text" : "radio-text-act"}>
                Слабо
              </span>
            </div>
            <div
              className="planer-mission-block-radio-block-ml"
              onClick={() => {
                setMediumTwo(true);
                setStrongTwo(false);
                setWeakTwo(false);
                setZeroTwo(false);
              }}
            >
              <div
                className={
                  !mediumTwo
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!mediumTwo ? "radio-text" : "radio-text-act"}>
                Средне
              </span>
            </div>
            <div
              className="planer-mission-block-radio-block-ml"
              onClick={() => {
                setStrongTwo(true);
                setWeakTwo(false);
                setMediumTwo(false);
                setZeroTwo(false);
              }}
            >
              <div
                className={
                  !strongTwo
                    ? "planer-radio-button-dis"
                    : "planer-radio-button-act"
                }
              ></div>
              <span className={!strongTwo ? "radio-text" : "radio-text-act"}>
                Сильно
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="planer-mission-container-bottom-second-block">
        <div className="planer-mission-container-bottom-second-block-child">
          <span className="planer-mission-container-bottom-second-block-child-text">
            Удалось сделать паузу?
          </span>
          <div className="planer-mission-container-bottom-second-button-block">
            <div className="planer-mission-container-bottom-second-button-yes">
              Да
            </div>
            <div className="planer-mission-container-bottom-second-button-no">
              Нет
            </div>
          </div>
        </div>
        <div className="planer-mission-container-bottom-second-block-child">
          <span className="planer-mission-container-bottom-second-block-child-text">
            Удалось усилить желание?
          </span>
          <div className="planer-mission-container-bottom-second-button-block">
            <div className="planer-mission-container-bottom-second-button-yes">
              Да
            </div>
            <div className="planer-mission-container-bottom-second-button-no">
              Нет
            </div>
          </div>
        </div>
        <div className="planer-mission-container-bottom-second-block-child">
          <span className="planer-mission-container-bottom-second-block-child-text">
            Удалось порадоваться после завершения Дела?
          </span>
          <div className="planer-mission-container-bottom-second-button-block">
            <div className="planer-mission-container-bottom-second-button-yes">
              Да
            </div>
            <div className="planer-mission-container-bottom-second-button-no">
              Нет
            </div>
          </div>
        </div>
      </div>
      <div className="planer-mission-container-bottom-comments-block">
        <span className="planer-mission-container-bottom-second-block-child-text">
          Важная информация “для себя”:
        </span>
        <div className="textarea-block">
          <textarea
            className="textarea"
            placeholder="Написать здесь"
          ></textarea>
        </div>
        <div className="planer-mission-button-bottom">
          <span className="planer-mission-button-bottom-text">Сохранить</span>
        </div>
      </div>
    </div>
  );
};
