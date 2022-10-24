import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/taskComponent';


const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  return (
    <div>
      <div>
        Your Tasks: 
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
       {/* Aplicar un For/Map para renderizar una lista de tareas */}
    </div>
  );
}

export default TaskListComponent;


