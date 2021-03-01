import { Component } from "react";
import Todo from './todo'
class Overview extends Component {
  constructor(props) {
    super()
  }

  render() {
    const {items, delFn, editFn} = this.props
    return (
      <ul>
        {items.map((item, i) => {
          return(
            <Todo
            id = {item.id} 
            number = {item.number}
            key = {item.id}
            task = {item.task}
            delFn = {delFn}
            editFn = {editFn}
            />
          )
        })}
      </ul>
    )
  }
}

export default Overview