import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm.jsx"
import TodoItem from "./TodoItem.jsx";


function loadTodos(){
   const savedTodos = localStorage.getItem("todos")
    return(
    savedTodos !== null ? JSON.parse(savedTodos) : [])
  }

export default function ToDoList({ firstName, lastName}) {
 
  const [todos, setTodos] = useState(loadTodos)
  let h1Style = { color: "deeppink", backgroundColor: "white" };

  useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos))}, [todos])

  

  function handleAdd(newTask) {
    let newTodo={id: crypto.randomUUID(), text: newTask, done: false}
    setTodos([...todos, newTodo]);
  }

  function handleRemove(toDelete){    
    setTodos(todos.filter((todo) => (todo.id != toDelete)))
    }

    function handleToggle(toToggle){
      setTodos(todos.map((todo) => (todo.id === toToggle ? {...todo, done: !todo.done} : todo)))
    }
  

  return (
    <>
      <h1 style={h1Style}>To Do List for {firstName}</h1>
      { todos.length === 0 ? <p>No Todos. Enjoy your day!</p> :
      <ul>      
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onRemove={handleRemove}/>
        ))}
      </ul>
      }

      <NewTodoForm onAdd={handleAdd}/>
      
    </>
  );
}
