import { useState } from "react";

export default function NewBookForm({onAdd}){
const [text, setText] = useState("");

function handleSubmit(e){
    e.preventDefault();
    onAdd(text);
    setText("");
}



return(
    <form onSubmit={handleSubmit}>

<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
<button disabled={text.length === 0}>Add book</button>

</form>
)
}