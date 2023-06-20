import React from "react";
import { ReactComponent as EllipseSvg } from "../../../assets/svgs/taskssvg/ellipseleft.svg";
import { ReactComponent as ExpandActSvg } from "../../../assets/svgs/taskssvg/expandAct.svg";
import { ReactComponent as ExpandDisSvg } from "../../../assets/svgs/taskssvg/expandDis.svg";
import { ReactComponent as CheckboxSvg } from "../../../assets/svgs/taskssvg/checkbox.svg";

export const TheoryStage = () => {
  const [expand1, setExpand1] = React.useState(false);
  const [expand2, setExpand2] = React.useState(false);
  return (
    <div className="tasks-stages-container">
      <div className="tasks-stages-container-etc-block">
        <div className="tasks-stages-container-up-block">
          <div className="tasks-stages-container-up-block-svg-text-block">
            <div className="tasks-stages-container-up-block-svg-text-block-child-text-block">
              <div class="line-item"></div>
              <div className="tasks-stages-container-up-block-svg-text-block-ellipse">
                <EllipseSvg />
              </div>
              <span className="tasks-stages-container-up-block-text">
                Этап 1
              </span>
              <div className="tasks-stages-container-up-block-date-block">
                <span className="tasks-stages-container-up-block-date-text">
                  7 июля-13 июля
                </span>
              </div>
            </div>
            <div className="tasks-stages-container-up-block-svg-text-block-child-text-block-down">
              <span className="tasks-stages-container-up-block-svg-text-block-child-text-block-down-text">
                Подготовка к работе
              </span>
            </div>
          </div>
          <div
            className="tasks-stages-container-up-block-expand-svg"
            onClick={() => setExpand1(!expand1)}
          >
            {expand1 ? <ExpandActSvg /> : <ExpandDisSvg />}
          </div>
        </div>
        {expand1 && (
          <div className="tasks-stages-container-down-block">
            <div className="tasks-stages-container-down-block-childFirst">
              <span className="tasks-stages-container-down-block-child-text">
                Две силы, определяющие желания, действия и мысли
              </span>
              <div className="tasks-stages-container-down-block-child-svg">
                <CheckboxSvg />
              </div>
            </div>
            <div className="tasks-stages-container-down-block-child">
              <span className="tasks-stages-container-down-block-child-text">
                test
              </span>
              <div className="tasks-stages-container-down-block-child-svg">
                {/* <CheckboxSvg /> */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="tasks-stages-container-etc-block">
        <div className="tasks-stages-container-up-block">
          <div className="tasks-stages-container-up-block-svg-text-block">
            <div className="tasks-stages-container-up-block-svg-text-block-child-text-block">
              {expand2 && <div class="line-item"></div>}
              <div className="tasks-stages-container-up-block-svg-text-block-ellipse">
                <EllipseSvg />
              </div>
              <span className="tasks-stages-container-up-block-text">
                Этап 1
              </span>
              <div className="tasks-stages-container-up-block-date-block">
                <span className="tasks-stages-container-up-block-date-text">
                  7 июля-13 июля
                </span>
              </div>
            </div>
            <div className="tasks-stages-container-up-block-svg-text-block-child-text-block-down">
              <span className="tasks-stages-container-up-block-svg-text-block-child-text-block-down-text">
                Подготовка к работе
              </span>
            </div>
          </div>
          <div
            className="tasks-stages-container-up-block-expand-svg"
            onClick={() => setExpand2(!expand2)}
          >
            {expand2 ? <ExpandActSvg /> : <ExpandDisSvg />}
          </div>
        </div>
        {expand2 && (
          <div className="tasks-stages-container-down-block">
            <div className="tasks-stages-container-down-block-childFirst">
              <span className="tasks-stages-container-down-block-child-text">
                Видео Введения
              </span>
              <div className="tasks-stages-container-down-block-child-svg">
                <CheckboxSvg />
              </div>
            </div>
            <div className="tasks-stages-container-down-block-child">
              <span className="tasks-stages-container-down-block-child-text">
                Видео Введения
              </span>
              <div className="tasks-stages-container-down-block-child-svg">
                {/* <CheckboxSvg /> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
