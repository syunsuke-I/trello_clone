import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClick,setIsClick] = useState(false);
  const [inputCardTitle,setInputCardTitle] = useState("today");

  const handleClick= ()=>{
    setIsClick(true);
  };

  const handleChange= (e)=>{
    setInputCardTitle(e.target.value);
  };

  const handleSubmit= (e)=>{
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur= (e)=>{
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className='taskCardInputArea'>
      {isClick ? 
      (
      <form onSubmit={handleSubmit}>
        <input
          className='taskCardInputTitle'
          autoFocus
          type="text" 
          onChange={handleChange} 
          onBlur={handleBlur}
          value={inputCardTitle}
          maxLength={10}
        />
      </form>
      ) 
      : <h3>{inputCardTitle}</h3>}
    </div>
  )
}

export default TaskCardTitle
