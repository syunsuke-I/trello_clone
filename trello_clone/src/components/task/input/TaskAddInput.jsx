import React from 'react'

export const TaskAddInput = () => {
  const handleSubmit = (e) =>{
    

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='add a task'
          className='taskAddInput'
        />
      </form>
    </div>
  )
}

export default TaskAddInput
