import Todo from './todo'

const Overview = (props) => {
  const {items, delFn, editFn} = props
  
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


export default Overview