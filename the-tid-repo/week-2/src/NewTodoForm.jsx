import { useState } from "react";




export default function NewTodoForm({onAdd}) {
 const [text, setText] = useState("")

 function handleSubmit(e){
  e.preventDefault()
  onAdd(text)
  setText("")
  
}


return (
<form onSubmit={handleSubmit}>
  <input type="text"
  value = {text} 
  onChange={(e) => setText(e.target.value)}/>

<button>Add New Task</button>

</form>
)
}