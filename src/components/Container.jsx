import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

import Tasks from "./Tasks"
import AddTask from './AddTask'

import "./Container.css"

const Container = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Ler Livros",
            completed: false
        },
        {
            id: 2,
            title: "Estudar Programação",
            completed: false
        },
    ])


    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task => {
            if(task.id == taskId) return{...task, completed: !task.completed}
            return task
        })
        setTasks(newTasks)
    }

    const handleTaskRemove = (taskId) => {
        const newTasks = tasks.filter((task) => {
            return task.id != taskId
        })
        setTasks(newTasks)
    }

    const handleTaskAddition = (title) => {
        const newTasks = [...tasks,
        {
            id: uuidv4(),
            title: title,
            completed: false
        }
        ]
        setTasks(newTasks)
    }

  return (
    <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
    </div>
  )
}

export default Container