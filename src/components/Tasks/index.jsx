import React from "react";
import { Header } from "../Header/Header";
import { TasksStages } from "./TasksStages/TasksStages";
import "./index.css";
import { TasksTip } from "./TasksRightComps/TasksTip";
import TasksStepOne from "./TasksRightComps/TasksStepOne";
import TasksTwoCases from "./TasksRightComps/TasksTwoCases";

export const Tasks = () => {
  return (
    <>
      <Header />
      <div className="tasks-container  background-filter">
        <div className="wrap-bg"></div>
        <TasksStages />
        <div className="tasks-container-left-up-block-rod">
          <div className="tasks-container-left-up-block">
            <p className="tasks-container-left-up-block-text">Этап 5</p>
            <span className="tasks-container-left-up-block-text-down">
              План развития себя
            </span>
          </div>
          <TasksTip />
          <TasksStepOne />
          <TasksTwoCases />
        </div>
      </div>
    </>
  );
};
