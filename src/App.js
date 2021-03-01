import { useState } from "react";
import Overview from "./components/Overview";
import uniqid from 'uniqid'
import './style/app.css'

const App = () =>{
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value !== ''){
      setTasks( [...tasks, {
        number: tasks.length + 1, 
        task: value, 
        id: uniqid()
      }])
      setValue('')
    }
  }

  const handleDelete = (e) => {
    const garabageId = e.target.parentNode.id

    const reducedArr = [...tasks];
    const garbage = reducedArr.find(item => item.id === garabageId)
    const garbageIx = reducedArr.indexOf(garbage)

    reducedArr.splice(garbageIx,1)

    setTasks(reducedArr)
  }
  
  const handleEdit = (e) => {
    const editId = e.target.parentNode.id
    const editInp = e.target.parentNode.querySelector('input')
    const reducedArr = [...tasks]
    const itemToChange = reducedArr.find(item => item.id === editId)
    const ix = reducedArr.indexOf(itemToChange)

    if(editInp.disabled){
      e.target.innerHTML = 'submit'
    }else{
      e.target.innerHTML = 'edit'
    }

    editInp.disabled = !editInp.disabled 
    reducedArr[ix].task = editInp.value
    setTasks(reducedArr)
  }
  

  return (
    <div className = 'App'>
      <form onSubmit={handleSubmit}>
        <input 
        type = 'text' 
        value={value} 
        onChange = {handleChange}
        placeholder="enter task"
        ></input>
        <button type = 'submit'>Add A task!</button>
      </form>
      <Overview editFn = {handleEdit} delFn = {handleDelete} items = {tasks}/>
    </div>
  );

}

export default App;
