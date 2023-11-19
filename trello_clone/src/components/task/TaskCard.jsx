import React from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskCardDeleteButton from './btn/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'


export const TaskCard = () => {
  return (
    <div className='taskCard'>
      <TaskCardTitle/>
      <TaskCardDeleteButton/>
      <TaskAddInput/>
      <Tasks/>
    </div>
  )
}

export default TaskCard
