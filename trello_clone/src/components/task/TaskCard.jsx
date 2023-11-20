import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './btn/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'


export const TaskCard = ({setTaskCardsList,taskCard,taskCardsList}) => {
  const [inputText,setInputText] = useState("");
  const [taskList,setTaskList] = useState([]);
  return (
    <div className='taskCard'>
      <div className="taskCardAndTaskCardDeleteButton">
        <TaskCardTitle/>
        <TaskCardDeleteButton
          setTaskCardsList={setTaskCardsList}
          taskCardsList={taskCardsList}
          taskCard={taskCard}
        />
      </div>
      <TaskAddInput 
        input={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        inputText={inputText}
        taskList={taskList}
      />
      <Tasks
        taskList={taskList}
        inputText={inputText}
        setTaskList={setTaskList}
      />
    </div>
  )
}

export default TaskCard
