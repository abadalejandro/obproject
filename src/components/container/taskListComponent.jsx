import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/taskComponent";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("TODO: cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
      {/* Aplicar un For/Map para renderizar una lista de tareas */}
    </div>
  );
};

export default TaskListComponent;
