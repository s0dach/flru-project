import React from "react";
import "./styles.css";
import { ReactComponent as Ellipse } from "../../assets/svgs/payment/ellipse.svg";

export const Payment = () => {
  const [startCourse, setStartCourse] = React.useState(false);
  return (
    <div className="payment-container">
      <div className="payment-container-child">
        {!startCourse ? (
          <>
            <div className="payment-block">
              <div className="payment-up-text-block">
                <div className="payment-up-text-block-child">
                  <span className="payment-up-text">Групповой тариф</span>
                </div>
              </div>
              <div className="payment-second-text-block">
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child-last">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
              </div>
              <div>
                <div className="payment-sum-block">
                  <span className="payment-sum-text">15 000 ₽</span>
                </div>
                <div className="payment-button-block">
                  <div
                    className="payment-button"
                    onClick={() => setStartCourse(true)}
                  >
                    <span className="payment-button-text">Выбрать</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-block-two">
              <div className="payment-up-text-block">
                <div className="payment-up-text-block-child">
                  <span className="payment-up-text">Индивидуальный тариф</span>
                </div>
              </div>
              <div className="payment-second-text-block">
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
                <div className="payment-second-text-block-child-last">
                  <Ellipse />
                  <span className="payment-second-text">8 недель курса</span>
                </div>
              </div>
              <div>
                <div className="payment-sum-block">
                  <span className="payment-sum-text">45 000 ₽</span>
                </div>
                <div className="payment-button-block">
                  <div
                    className="payment-button"
                    onClick={() => setStartCourse(true)}
                  >
                    <span className="payment-button-text">Выбрать</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
