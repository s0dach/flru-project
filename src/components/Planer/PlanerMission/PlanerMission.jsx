import React from "react";
import "./styles.css";

export const PlanerMission = () => {
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
            <div className="planer-mission-block-radio-block">
              <input value="null-up" type="radio" className="radioinput" />
              <span className="radio-text">Ноль</span>
            </div>
            <div className="planer-mission-block-radio-block-ml">
              <input value="faintly-up" type="radio" className="radioinput" />
              <span className="radio-text">Слабо</span>
            </div>
            <div className="planer-mission-block-radio-block-ml">
              <input
                id="medium-up"
                value="medium-up"
                type="radio"
                className="radioinput"
              />
              <span className="radio-text">Средне</span>
            </div>
            <div className="planer-mission-block-radio-block-ml">
              <input
                id="strong-up"
                value="strong-up"
                type="radio"
                className="radioinput"
                onChange={(e) => (e.target.value = "off")}
              />
              <span className="radio-text">Сильно</span>
            </div>
          </div>
        </div>
        <div className="planer-mission-block-up">
          <span className="planer-mission-block-up-text">Сила нежелания</span>
          <div className="planer-mission-block-radio-status">
            <div className="planer-mission-block-radio-block">
              <input type="radio" className="radioinput" />
              <span className="radio-text">Ноль</span>
            </div>
            <div className="planer-mission-block-radio-block-ml">
              <input type="radio" className="radioinput" />
              <span className="radio-text">Слабо</span>
            </div>
            <div className="planer-mission-block-radio-block-ml">
              <input type="radio" className="radioinput" />
              <span className="radio-text">Средне</span>
            </div>
            <div className="planer-mission-block-radio-block-ml">
              <input type="radio" className="radioinput" />
              <span className="radio-text">Сильно</span>
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
