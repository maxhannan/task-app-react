import { Component } from "react";
import Overview from "./components/Overview";
import uniqid from 'uniqid'
import './style/app.css'

class App extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      value: '',
      tasks : []
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.value !== ''){
      this.setState ((previousState) => ({
        tasks: [...previousState.tasks, {
            number: this.state.tasks.length + 1, 
            task: this.state.value, 
            id: uniqid()
          }
        ],
        value: ''
      }))
    }
    
    event.preventDefault();
  }

  handleDelete(event) {
    const garabageId = event.target.parentNode.id

    const reducedArr = [...this.state.tasks];
    const garbage = reducedArr.find(item => item.id === garabageId)
    const garbageIx = reducedArr.indexOf(garbage)

    reducedArr.splice(garbageIx,1)

    this.setState({tasks: reducedArr})
  }

  handleEdit(event) {
    const editId = event.target.parentNode.id
    const editInp = event.target.parentNode.querySelector('input')
    const reducedArr = [...this.state.tasks]
    const itemToChange = reducedArr.find(item => item.id === editId)
    const ix = reducedArr.indexOf(itemToChange)
    if(editInp.disabled){
      event.target.innerHTML = 'submit'
    }else{
      event.target.innerHTML = 'edit'
    }
    editInp.disabled = !editInp.disabled 
    reducedArr[ix].task = editInp.value
    this.setState({tasks: reducedArr})
    console.log(this.state.tasks)
  }

  render() {
    return (
      <div className = 'App'>
        <form onSubmit={this.handleSubmit}>
          <input 
          type = 'text' 
          value={this.state.value} 
          onChange = {this.handleChange}
          placeholder="enter task"
          ></input>
          <button type = 'submit'>Add A task!</button>
        </form>
        <Overview editFn = {this.handleEdit} delFn = {this.handleDelete} items = {this.state.tasks}/>
      </div>
    );
  }
}

export default App;
