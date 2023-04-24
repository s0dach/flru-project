import React from "react";
import "./styles.css";

export const PlanerActualTime = () => {
  return (
    <div className="planer-actualtime-container">
      <div className="planer-actualtime-text-block">
        <span className="planer-actualtime-text">
          Фактическое время выполнения дела
        </span>
      </div>
      <div className="planer-actualtime-time-block">
        <div className="planer-actualtime-time-block-first">
          <div className="planer-actualtime-time-block-first-text-block">
            <span className="planer-actualtime-time-block-text">с</span>
            <span className="planer-actualtime-time-block-star">*</span>
          </div>
          <div className="planer-actualtime-time-block-input">
            <span className="planer-actualtime-time-block-input-text">
              _ _ : _ _
            </span>
          </div>
        </div>
        <div className="planer-actualtime-time-block-second">
          <div>
            <span className="planer-actualtime-time-block-text">по</span>
            <span className="planer-actualtime-time-block-star">*</span>
          </div>
          <div className="planer-actualtime-time-block-input">
            <span className="planer-actualtime-time-block-input-text">
              _ _ : _ _
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
