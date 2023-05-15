import React from 'react'
import {AiOutlineClose, AiOutlineInfoCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'

import "./Task.css"

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    const taskComplete = () => {
        handleTaskClick(task.id)
    }
  return (
    <div className='task-container' style={task.completed ? {borderLeft: "8px solid orangered"} : {}}>
        <div className='task-title' onClick={taskComplete}>{task.title}</div>
        <div className='task-icons' onClick={() => handleTaskRemove(task.id)}>
          <AiOutlineClose />
          <Link to={`/info/${task.title}`}><AiOutlineInfoCircle /></Link>
        </div>

    </div>
  )
}

export default Task