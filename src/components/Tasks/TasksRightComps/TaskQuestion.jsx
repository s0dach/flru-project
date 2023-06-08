import React from "react";
import "./styles.css";

export const TaskQuestion = () => {
  return (
    <div className="task-question-container">
      <div className="task-question-one-block">
        <div className="task-question-one-text-block">
          <span className="task-question-one-text">Задача</span>
        </div>
        <div className="task-question-one-text-two-block">
          <span className="task-question-one-text-two">
            Подберите дело, оно должно соответствовать «Правилам работы»
          </span>
        </div>
        <div className="task-question-one-button">Правила работы</div>
      </div>
      <div className="task-question-two-block">
        <div className="task-question-two-block-first-text-block">
          <span className="task-question-two-block-first-text">
            Две цели дела
          </span>
        </div>
        <div className="task-question-two-block-second-text-block">
          <span className="task-question-two-block-second-text">
            1. Развивающее дело
          </span>
          <div className="task-question-two-block-second-input-block">
            <input
              type="text"
              placeholder="Укажите название"
              className="task-question-two-block-second-input"
            />
          </div>
        </div>
        <div className="task-question-two-block-three-text-block">
          <span className="task-question-two-block-second-text">
            2. Минимальная продолжительность дела или иной количественный
            минимум (для разового выполнения)
          </span>
          <div className="task-question-two-block-second-input-block">
            <input
              type="text"
              placeholder="Напишите ваш ответ"
              className="task-question-two-block-second-input"
            />
          </div>
        </div>
        <div className="task-question-two-block-three-text-block">
          <span className="task-question-two-block-second-text">
            3. Обязательный минимум выполнения по плану - 5 дней в неделю (дело
            можно выполнять даже 7 дней в неделю, но в курсе дело заранее
            планируется только на 5 дней)
          </span>
        </div>
        <div className="task-question-two-block-four-text-block">
          <span className="task-question-two-block-second-text">
            4. Две цели выполнения дела («Внешняя» и «Внутренняя»)
          </span>
          <div className="task-question-four-block-second-block-child">
            <span className="task-question-two-block-second-text">
              Цель 1 «Внешняя»
              <br /> Какие внешние изменения в теле, действиях, результатах
              действий хочу иметь после завершения курса (новые умения, знания,
              прибавка силы, корректировка веса и т.п.)»
            </span>
          </div>
          <div className="task-question-two-block-second-input-block">
            <textarea
              className="textarea"
              placeholder="Например: похудеть на 3 кг, отжиматься не менее 8 раз, прочитать конкретную книжку (книжки), освоить язык программирования"
            ></textarea>
          </div>
        </div>
        <div className="task-question-five-block-second-text-block">
          <span className="task-question-two-block-second-text">
            Количественное выражение Цели 1
          </span>
          <div className="task-question-two-block-second-input-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="task-question-five-block-second-text-block">
          <span className="task-question-two-block-second-text">
            Цель 2 «Внутренняя»<br></br> Желаемые изменения «в своих внутренних
            качествах» в ходе курса. Что хочу развить, ослабить и т.п. в своих
            внутренних качествах:
          </span>
          <div className="task-question-two-block-second-input-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="task-question-five-block-second-text-block">
          <span className="task-question-two-block-second-text">
            По каким признакам смогу оценить, произошли желаемые изменения или
            нет:
          </span>
          <div className="task-question-two-block-second-input-block">
            <textarea
              className="textarea"
              placeholder="Напишите ваш ответ"
            ></textarea>
          </div>
        </div>
        <div className="task-question-down-block">
          <div className="task-question-down-text-block">
            <span className="task-question-down-text">
              Проверочные вопросы к выбору дела
            </span>
          </div>
          <div className="task-question-down-text-two-block">
            <span className="task-question-down-text-child">
              1. Является ли выбранное дело и режим его выполнения посильным?
            </span>
            <div className="task-question-down-text-child-block">
              <span className="task-question-down-text-child">
                2. Можно ли данное дело выполнять в пределах 20 - 60 минут в
                день; 5 дней в неделю; не менее 6 недель подряд?
              </span>
            </div>
            <div className="task-question-down-text-child-block">
              <span className="task-question-down-text-child">
                2. Можно ли данное дело выполнять в пределах 20 - 60 минут в
                день; 5 дней в неделю; не менее 6 недель подряд?
              </span>
            </div>
            <div className="task-question-down-text-child-block">
              <span className="task-question-down-text-child">
                2. Можно ли данное дело выполнять в пределах 20 - 60 минут в
                день; 5 дней в неделю; не менее 6 недель подряд?
              </span>
            </div>
            <div className="task-question-down-text-child-block">
              <span className="task-question-down-text-child">
                2. Можно ли данное дело выполнять в пределах 20 - 60 минут в
                день; 5 дней в неделю; не менее 6 недель подряд?
              </span>
            </div>
          </div>
          <div className="task-question-down-text-two-button">
            Подтвердить выбор дела
          </div>
        </div>
      </div>
    </div>
  );
};
