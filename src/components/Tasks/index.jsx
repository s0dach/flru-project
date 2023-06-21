import React from "react";
import { Header } from "../Header/Header";
import { TasksStages } from "./TasksStages/TasksStages";
import "./index.css";
import { TasksModal } from "./TasksModal/TasksModal";
import { TasksHow } from "./TasksRightComps/TasksHow";
import { TasksSchema } from "./TasksRightComps/TasksSchema";
import { TaskQuestion } from "./TasksRightComps/TaskQuestion";
import { TasksTarget } from "./TasksRightComps/TasksTarget";

export const Tasks = () => {
  const [active, setActive] = React.useState(false);

  const [schema, setSchema] = React.useState(false);
  const [question, setQuestion] = React.useState(false);
  const [target, setTarget] = React.useState(false);

  return (
    <>
      <Header active={"Задания"} />
      <div className="background-filter">
      <div className="container-tasks">
      <div className="tasks-container">
        <TasksStages
          setSchema={setSchema}
          setQuestion={setQuestion}
          setTarget={setTarget}
        />
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
          {!schema && !question && !target && <TasksHow />}
          {schema && <TasksSchema />}
          {question && <TaskQuestion />}
          {target && <TasksTarget />}
          {/* <TasksTip /> */}
          {/* <TasksStepOne />
          <TasksTwoCases /> */}
        </div>
      </div>
      </div>
      </div>
      <TasksModal active={active} setActive={setActive} />
    </>
  );
};
