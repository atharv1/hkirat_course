import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed:false
  },{
    title:"Study DSA",
    description: "Study DSA from 9-100",
    completed:true
  },{
    title:"Study DSA",
    description: "Study DSA from 9-100",
    completed:true
  }]);

  function AddTodo(props){
    //[1,2]
    //[...todos,3] --> [1,2,3]
    setTodos([...todos,{  // ()...) is spread operator which spreads the array and adds new element to it, here 3 is added to [1,2]
      title:"new Todo",
      description:"desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={AddTodo} style={{border:10}}>Add a random todo</button>
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */} 
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

// function NotificationComponent(props){ 
//   // 99+,98,97
//   return <div>
//     {props.notification > 99 ? "99+" : props.notificationCount}    //if-else
//   </div>
// }

export default App
