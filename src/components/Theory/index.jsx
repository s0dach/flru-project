import React from 'react'
import { TheoryStage } from './TheoryStage/TheoryStage'
import { TheoryFirst } from './TheoryFirst'

export const Theory = () =>{
  return (
    <>
    <div className="tasks-container  background-filter">
      <div className="wrap-bg"></div>
      <TheoryStage />
      <div className="tasks-container-left-up-block-rod">
        <div
          className="tasks-container-left-up-block"
        >
          {/* <p className="tasks-container-left-up-block-text">Этап 5</p>
          <span className="tasks-container-left-up-block-text-down">
            План развития себя
          </span> */}
          <p className="tasks-container-left-up-block-text">Теория</p>
        </div>
        {/* {!schema && !question && !target && <TasksHow />}
        {schema && <TasksSchema />}
        {question && <TaskQuestion />}
        {target && <TasksTarget />} */}
        {/* <TasksTip /> */}
        {/* <TasksStepOne />
        <TasksTwoCases /> */}
        <TheoryFirst />
      </div>
    </div>
  </>
  )
}
