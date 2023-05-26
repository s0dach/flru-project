import React from "react";
import { Header } from "../Header/Header";
import { TasksStages } from "./TasksStages/TasksStages";
import "./index.css";
import { TasksModal } from "./TasksModal/TasksModal";
import { TasksHow } from "./TasksRightComps/TasksHow";

export const Tasks = () => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <Header active={"Задания"} />
      <div className="tasks-container  background-filter">
        <div className="wrap-bg"></div>
        <TasksStages />
        <div className="tasks-container-left-up-block-rod">
          <div
            className="tasks-container-left-up-block"
            onClick={() => setActive(true)}
          >
            {/* <p className="tasks-container-left-up-block-text">Этап 5</p>
            <span className="tasks-container-left-up-block-text-down">
              План развития себя
            </span> */}
            <p className="tasks-container-left-up-block-text">Введение</p>
            <span className="tasks-container-left-up-block-text-down">
              Как пользоваться
            </span>
          </div>
          <TasksHow />
          {/* <TasksTip /> */}
          {/* <TasksStepOne />
          <TasksTwoCases /> */}
        </div>
      </div>
      <TasksModal active={active} setActive={setActive} />
    </>
  );
};
