import React, {  useEffect, useState } from 'react'

const Todo = (props) => {
  // State variables
  const [taskName, setTask] = useState('')
  // prop variables
  const {id, delFn, editFn, number, task} = props

  useEffect(()=>{
    setTask(task)
  }, [task])
  
  return (
    <li id = {id} key = {id}>
      <h6>{number}. </h6>
      <input type = 'text' onChange = {event => setTask(event.target.value) } value = {taskName} disabled></input>
      <button onClick = {editFn}>edit</button>
      <button onClick = {delFn}>del</button>
    </li>
  )
}


export default Todo