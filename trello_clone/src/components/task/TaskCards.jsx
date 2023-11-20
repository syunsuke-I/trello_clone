import React, { useState } from 'react';
import {TaskCard} from './TaskCard';
import {AddTaskCardButton} from './btn/AddTaskCardButton';

export const TaskCards = () => {
  const [taskCardsList,setTaskCardsList] = useState([{
    id:0,
    draggableId:`item${0}`,
  }
]);
  return (
    <div className='taskCardArea'>
      {taskCardsList.map((taskCard)=>(
        <TaskCard key={taskCard.id} 
          setTaskCardsList={setTaskCardsList}
          taskCardsList={taskCardsList}
          taskCard={taskCard}
        />
      ))}
      <AddTaskCardButton 
        taskCardsList={taskCardsList} 
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};

export default TaskCards
