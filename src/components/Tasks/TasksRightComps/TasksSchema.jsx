import React from "react";
import "./styles.css";
import { ReactComponent as SchemaOneSvg } from "../../../assets/svgs/tasks/schemaone.svg";
import { ReactComponent as SchemaTwoSvg } from "../../../assets/svgs/tasks/schematwo.svg";
import { ReactComponent as SchemaThreeSvg } from "../../../assets/svgs/tasks/schemathree.svg";

export const TasksSchema = () => {
  return (
    <div className="schema-container">
      <div className="schema-block-one">
        <div className="schema-block-one-container">
          <div className="schema-block-one-container-child-one">
            <SchemaOneSvg />
            <div className="schema-block-one-container-child-text-block">
              <p className="schema-block-one-container-child-one-text-one">
                Понедельник - пятница
              </p>
              <div className="schema-block-one-container-child-one-text-two-block">
                <p className="schema-block-one-container-child-one-text-two">
                  Дни выполнения заданий
                </p>
              </div>
            </div>
          </div>
          <div className="schema-block-one-container-child-two">
            <SchemaTwoSvg />
            <div className="schema-block-one-container-child-text-block">
              <p className="schema-block-one-container-child-one-text-one">
                Суббота
              </p>
              <div className="schema-block-one-container-child-one-text-two-block">
                <p className="schema-block-one-container-child-one-text-two">
                  • Первая “Рабочая встреча с Ведущим”
                </p>
                <p className="schema-block-one-container-child-one-text-two">
                  • Доработка заданий
                </p>
                <p className="schema-block-one-container-child-one-text-two">
                  • Подготовка первого недельного плана работы
                </p>
              </div>
            </div>
          </div>
          <div className="schema-block-one-container-child-two">
            <SchemaThreeSvg />
            <div className="schema-block-one-container-child-text-block">
              <p className="schema-block-one-container-child-one-text-one">
                Воскресенье - отдых
              </p>
              <div className="schema-block-one-container-child-one-text-two-block">
                <p className="schema-block-one-container-child-one-text-two">
                  • Осмысление работы по Этапу 1
                </p>
                <p className="schema-block-one-container-child-one-text-two">
                  • Доработка заданий
                </p>
                <p className="schema-block-one-container-child-one-text-two">
                  • Возможность изменить первый недельный план работы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="schema-block-two">
        <div className="chema-block-two-text-one-block">
          <span className="chema-block-two-text-one">
            Ваше дело: утренняя пробежка
          </span>
        </div>
        <div className="chema-block-two-text-two-block">
          <p className="chema-block-two-text-two">
            Минимальная продолжительность дела или иной количественный минимум:
          </p>
          <div className="chema-block-two-text-two-child-block">
            <span className="chema-block-two-text-two-child">
              2 км легким бегом каждый день, без перехода на шаг
            </span>
          </div>
        </div>
        <div className="chema-block-two-text-two-block">
          <p className="chema-block-two-text-two">
            Минимальная продолжительность дела или иной количественный минимум:
          </p>
          <div className="chema-block-two-text-two-child-block">
            <span className="chema-block-two-text-two-child">
              2 км легким бегом каждый день, без перехода на шаг
            </span>
          </div>
        </div>
        <div className="chema-block-two-text-two-block">
          <p className="chema-block-two-text-two">
            Минимальная продолжительность дела или иной количественный минимум:
          </p>
          <div className="chema-block-two-text-two-child-block">
            <span className="chema-block-two-text-two-child">
              2 км легким бегом каждый день, без перехода на шаг
            </span>
          </div>
        </div>
        <div className="chema-block-two-text-two-block">
          <p className="chema-block-two-text-two">
            Минимальная продолжительность дела или иной количественный минимум:
          </p>
          <div className="chema-block-two-text-two-child-block">
            <span className="chema-block-two-text-two-child">
              2 км легким бегом каждый день, без перехода на шаг
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
