import React from 'react';
import {TaskCard} from './TaskCard';
import {AddTaskCardButton} from './btn/AddTaskCardButton';

export const TaskCards = () => {
  return (
    <div>
      <TaskCard/>
      <AddTaskCardButton/>
    </div>
  )
}

export default TaskCards
