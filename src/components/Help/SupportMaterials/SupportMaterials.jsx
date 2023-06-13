import React from "react";
import "./styles.css";
import { Player } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";

export const SupportMaterials = () => {
  return (
    <div className="sup-mat-container">
      <div className="mt125">
        <div className="sup-mat-text-block">
          <p className="sup-mat-text-up">Вспомогательные материалы</p>
          <span className="sup-mat-text-down">
            Если у вас возникли вопросы по работе с сайтом, посмотрите эти
            информационные матералы.
          </span>
        </div>
        <div className="sup-mat-video-block">
          <div className="sup-mat-video">    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /></div>
          <div className="sup-mat-video-text-block">
            <span className="sup-mat-video-text-up">Заголовок</span>
            <div className="sup-mat-video-text-child-block">
              <p className="sup-mat-video-text-down">Основной текст</p>
            </div>
          </div>
        </div>
        <div className="sup-mat-text-down-block">
          <span className="sup-mat-video-text-up">Заголовок</span>
          <div className="sup-mat-video-text-child-block">
            <p className="sup-mat-video-text-down">Основной текст</p>
          </div>
        </div>
      </div>
    </div>
  );
};
