import { useState } from 'react'

import Button from "./Button"

import "./AddTask.css"

const AddTask = ({ handleTaskAddition }) => {
  const [title, setTitle] = useState("")

  const addTaskTitle = (e) => {
    setTitle(e.target.value)
    console.log(e.target.value)
  
  }
  const addTask = () => {
    handleTaskAddition(title)
    setTitle("")
  }

  return (
    <div className='add-task-container'>
        <input type="text" onChange={addTaskTitle} value={title}/>
        <Button addTask={addTask}>Adicionar</Button>
    </div>
  )
}

export default AddTask