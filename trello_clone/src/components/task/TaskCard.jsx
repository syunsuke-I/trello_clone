import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './btn/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'


export const TaskCard = () => {
  const [inputText,setInputText] = useState("");
  const [taskList,setTaskList] = useState([]);
  return (
    <div className='taskCard'>
      <TaskCardTitle/>
      <TaskCardDeleteButton/>
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
      />
    </div>
  )
}

export default TaskCard
