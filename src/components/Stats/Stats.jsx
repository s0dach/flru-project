import React from "react";
import "./styles.css";
import { ReactComponent as StatsSvg } from "../../assets/svgs/stats/statsheader.svg";
import { ReactComponent as LeftArrowSvg } from "../../assets/svgs/stats/leftArrow.svg";
import { ReactComponent as RightArrowSvg } from "../../assets/svgs/stats/rightArrow.svg";
import { ReactComponent as FirstStatSvg } from "../../assets/svgs/stats/onestat.svg";
import { ReactComponent as SecondStatSvg } from "../../assets/svgs/stats/twostat.svg";
import { ReactComponent as LastStatSvg } from "../../assets/svgs/stats/threestat.svg";
import { ReactComponent as DisCheckBoxSvg } from "../../assets/svgs/stats/checkbox-dis.svg";
import { ReactComponent as ActCheckBoxSvg } from "../../assets/svgs/stats/checkbox-act.svg";
import ReactPlayer from "react-player";

export const Stats = () => {
  const [state, setState] = React.useState(false);
  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  return (
    <div className="stats-container">
      <div className="stats-container-child">
        <div className="stats-container-up-block">
          <div className="stats-container-left-block">
            <div className="stats-container-left-up-block">
              <StatsSvg />
              <span className="stats-container-left-up-text">Статистика</span>
            </div>
            <div className="stats-container-left-second-block">
              <div className="stats-container-left-second-left-block">
                <div className="stats-container-left-second-left-block-button-dis">
                  Пауза
                </div>
                <div className="stats-container-left-second-left-block-button">
                  Усиление желания
                </div>
                <div className="stats-container-left-second-left-block-button">
                  Верное завершение
                </div>
                <div className="stats-container-left-second-left-block-button">
                  Умный стиль
                </div>
              </div>
              <div className="stats-container-left-second-right-block">
                <LeftArrowSvg />
                <div className="stats-container-left-second-right-center-block">
                  7 июля-13 июля
                </div>
                <RightArrowSvg />
              </div>
            </div>
            <div className="stats-container-left-down-block">
              <div className="stats-container-left-down-up-block">
                <span className="stats-container-left-down-up-block-text">
                  Учет результатов по дням
                </span>
              </div>
              <div className="stats-container-left-diagramma-block">
                <div className="stats-container-left-diagramma"></div>
                <div className="stats-container-left-button-left-second-block">
                  <div className="stats-container-left-button-act">
                    По неделям
                  </div>
                  <div className="stats-container-left-button">Весь курс</div>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-container-right-block">
            <div className="stats-container-right-block-up">
              <p className="stats-container-right-block-up-text">
                Если пауза, усиление желания, верное завершение или Умный стиль
                выполнены - то столбик-показатель присутствует в дне.
              </p>
              <p className="stats-container-right-block-up-text">
                Линии - объем выполнения дела, сила нежелания или желания.
              </p>
            </div>
            <div className="stats-container-right-block-second">
              <div className="stats-container-right-block-second-text-block">
                <span className="stats-container-right-block-second-text">
                  Какие данные отображать
                </span>
              </div>
              <div className="stats-container-right-featuring-block">
                <div className="stats-container-right-featuring-block-child">
                  <div
                    className="stats-container-right-featuring-checkbox"
                    onClick={() => setState(!state)}
                  >
                    {!state ? <DisCheckBoxSvg /> : <ActCheckBoxSvg />}
                  </div>
                  <div className="stats-container-right-featuring-block-child-text-block">
                    <span className="stats-container-right-featuring-block-child-text">
                      Объем выполнения
                    </span>
                  </div>
                  <FirstStatSvg />
                </div>
                <div className="stats-container-right-featuring-block-child">
                  <div
                    className="stats-container-right-featuring-checkbox"
                    onClick={() => setState1(!state1)}
                  >
                    {!state1 ? <DisCheckBoxSvg /> : <ActCheckBoxSvg />}
                  </div>
                  <div className="stats-container-right-featuring-block-child-text-block">
                    <span className="stats-container-right-featuring-block-child-text">
                      Сила нежелания
                    </span>
                  </div>
                  <SecondStatSvg />
                </div>
                <div className="stats-container-right-featuring-block-child">
                  <div
                    className="stats-container-right-featuring-checkbox"
                    onClick={() => setState2(!state2)}
                  >
                    {!state2 ? <DisCheckBoxSvg /> : <ActCheckBoxSvg />}
                  </div>
                  <div className="stats-container-right-featuring-block-child-text-block">
                    <span className="stats-container-right-featuring-block-child-text">
                      Сила желания
                    </span>
                  </div>
                  <LastStatSvg />
                </div>
              </div>
            </div>
            <div className="stats-container-right-block-last">
              <div className="stats-container-right-block-second-text-block">
                <span className="stats-container-right-block-second-text">
                  Диаграммы
                </span>
              </div>
              <div className="stats-container-right-block-second-down-block">
                <div className="stats-container-right-block-second-down-block-child">
                  <span className="stats-container-right-block-second-down-block-child-text">
                    Не выполнено
                  </span>
                  <div className="stats-grey-ellipse"></div>
                </div>
                <div className="stats-container-right-block-second-down-block-child-mt">
                  <span className="stats-container-right-block-second-down-block-child-text">
                    Выполнено
                  </span>
                  <div className="stats-blue-ellipse"></div>
                </div>
                <div className="stats-container-right-block-second-down-block-child-mt">
                  <div className="stats-container-right-block-second-down-block-child-text-block">
                    <span className="stats-container-right-block-second-down-block-child-text">
                      Дело начато в запланированный интервал
                    </span>
                  </div>
                  <div className="stats-strongblue-ellipse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats-container-down-block">
          <div className="stats-container-down-text-block">
            <span className="stats-container-down-text">
              Диаграммы выполнений дела за неделю
            </span>
          </div>
          <div className="stats-container-down-week-block">
            <div className="stats-container-down-week">
              <div className="stats-container-down-week-up">
                <span className="stats-container-down-week-up-text">
                  Неделя 1
                </span>
              </div>
              <div className="stats-container-down-week-down">
                <div className="stats-container-down-week-down-circle">
                  <span className="stats-container-down-week-down-text">
                    4 из 5
                  </span>
                </div>
                <section class="chart">
                  <div
                    class="triangle"
                    style={{ transform: "rotate(   0deg)" }}
                  >
                    <div class="circle" style={{ background: "#C2C9D1" }}></div>
                  </div>
                  <div
                    class="triangle"
                    style={{ transform: "rotate( -60deg)" }}
                  >
                    <div class="circle" style={{ background: "#1457A4" }}></div>
                  </div>
                  <div
                    class="triangle"
                    style={{ transform: "rotate(-120deg)" }}
                  >
                    <div class="circle" style={{ background: "#1457A4" }}></div>
                  </div>
                  <div
                    class="triangle"
                    style={{ transform: "rotate(-180deg)" }}
                  >
                    <div class="circle" style={{ background: "#00A2FF" }}></div>
                  </div>
                  <div
                    class="triangle"
                    style={{ transform: "rotate(-180deg)" }}
                  >
                    <div class="circle" style={{ background: "#00A2FF" }}></div>
                  </div>
                  <div
                    class="triangle"
                    style={{ transform: "rotate(-240deg)" }}
                  >
                    <div class="circle" style={{ background: "#00A2FF" }}></div>
                  </div>
                  <div
                    class="triangle"
                    style={{ transform: "rotate(-300deg)" }}
                  >
                    <div class="circle" style={{ background: "#00A2FF" }}></div>
                  </div>
                </section>
              </div>
            </div>
            <div className="stats-container-down-week-ml">
              <div className="stats-container-down-week-up">
                <span className="stats-container-down-week-up-text">
                  Неделя 2
                </span>
              </div>
              <div className="stats-container-down-week-down">
                <div className="stats-container-down-week-down-ellipse"></div>
              </div>
            </div>
            <div className="stats-container-down-week-ml">
              <div className="stats-container-down-week-up">
                <span className="stats-container-down-week-up-text">
                  Неделя 3
                </span>
              </div>
              <div className="stats-container-down-week-down">
                <div className="stats-container-down-week-down-ellipse"></div>
              </div>
            </div>
            <div className="stats-container-down-week-ml">
              <div className="stats-container-down-week-up">
                <span className="stats-container-down-week-up-text">
                  Неделя 4
                </span>
              </div>
              <div className="stats-container-down-week-down">
                <div className="stats-container-down-week-down-ellipse"></div>
              </div>
            </div>
            <div className="stats-container-down-week-ml">
              <div className="stats-container-down-week-up">
                <span className="stats-container-down-week-up-text">
                  Неделя 5
                </span>
              </div>
              <div className="stats-container-down-week-down">
                <div className="stats-container-down-week-down-ellipse"></div>
              </div>
            </div>
            <div className="stats-container-down-week-ml">
              <div className="stats-container-down-week-up">
                <span className="stats-container-down-week-up-text">
                  Неделя 6
                </span>
              </div>
              <div className="stats-container-down-week-down">
                <div className="stats-container-down-week-down-ellipse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
