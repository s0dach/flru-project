import React from "react";
import "./styles.css";
import { BigPlayButton, Player , PosterImage } from "video-react";

export const VideoComponent = () => {
  return (
    <div className="video-comp-container">
      <div className="video-comp-container-child">
        <div className="video-header">
          <div className="video-header-svg">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4997 52.9164V2.08301M14.7913 52.9164V40.208M14.7913 14.7913V2.08301M40.208 52.9164V40.208M40.208 14.7913V2.08301M2.08301 14.7913H52.9163M2.08301 40.208H52.9163M52.9163 40.7163V14.283C52.9163 10.0126 52.9163 7.87741 52.0853 6.24633C51.3542 4.81159 50.1878 3.64512 48.753 2.91408C47.1219 2.08301 44.9867 2.08301 40.7163 2.08301L14.283 2.08301C10.0126 2.08301 7.87741 2.08301 6.24633 2.91408C4.81159 3.64512 3.64512 4.8116 2.91408 6.24633C2.08301 7.87741 2.08301 10.0126 2.08301 14.283L2.08301 40.7164C2.08301 44.9868 2.08301 47.122 2.91408 48.753C3.64512 50.1878 4.8116 51.3542 6.24633 52.0853C7.87741 52.9164 10.0126 52.9164 14.283 52.9164H40.7163C44.9867 52.9164 47.1219 52.9164 48.753 52.0853C50.1878 51.3542 51.3542 50.1878 52.0853 48.753C52.9163 47.1219 52.9163 44.9868 52.9163 40.7163Z"
                stroke="url(#paint0_linear_116_9373)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_116_9373"
                  x1="2.08301"
                  y1="3.22676"
                  x2="62.5029"
                  y2="34.2394"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A2FF" />
                  <stop offset="0.513961" stop-color="#1B75DE" />
                  <stop offset="1" stop-color="#113045" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="video-header-text">Видео</span>
        </div>
        <div className="video-main">
          <div className="video-main-menu-one">
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
          <div className="video-main-menu">
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
          <div className="video-main-menu-last">
            <div className="video-player">
              <Player
                playsInline
                poster="./assets/images/poster11.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              >
              <BigPlayButton position="center" />
              </Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
