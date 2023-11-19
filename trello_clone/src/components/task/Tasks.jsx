import React, { useState } from 'react'
import Task from './Task';

export const Tasks = ({taskList,setTaskList}) => {
  return (
    <div>
      <div>
        {taskList.map((task) => (
          <div key={task.id}>
            <Task 
              task={task}
              setTaskList={setTaskList}
              taskList={taskList}
            />
          </div>
      ))}
      </div>
    </div>
  );
};

export default Tasks
