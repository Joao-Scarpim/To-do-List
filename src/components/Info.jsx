import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Button from './Button'

import "./Info.css"


const Info = () => {
    const {title} = useParams()
  return (
    <div className='task-info-container'>
        <div className="task-content">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos molestiae harum mollitia dicta vel placeat, iusto quidem, est reiciendis praesentium commodi temporibus laborum a, similique molestias? Earum, iste sint.</p>
        </div>
        <Link to="/"><Button>Voltar</Button></Link>
    </div>
  )
}

export default Info