import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const TaskCardDeleteButton = ({setTaskCardsList,taskCard,taskCardsList}) => {
  const handleTaskCardDelete = (id) => {
    setTaskCardsList(taskCardsList.filter((e) =>  e.id !== id))
  }
  return (
    <div>
      <button 
        className='taskCardDeleteButton'
        onClick={() => handleTaskCardDelete(taskCard.id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button> 
    </div>
  )
}

export default TaskCardDeleteButton
