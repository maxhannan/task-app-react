import React, { Component } from 'react'

class Todo extends Component {
  constructor(props){
    super()
    this.state = {
      taskName: ''
    }
    this.handleUpdate = this.handleUpdate.bind(this);

  }
  componentDidMount() {
    this.setState({
      taskName: this.props.task
    })
  }
  handleUpdate(event) {
    this.setState({taskName: event.target.value});
  }
  render() {
    const {id, delFn, editFn, number} = this.props
    return (
      <li 
      id = {id} 
      key = {id}
      >
      <h6>{number}. </h6>
      <input type = 'text' onChange = {this.handleUpdate} value = {this.state.taskName} disabled></input>
      <button onClick = {editFn}>edit</button>
      <button onClick = {delFn}>del</button>
      </li>
    )
  }
}

export default Todo