import "./App.css";
import ToDoList from "./ToDoList.jsx";
import ToDoPanel from "./ToDoPanel.jsx";

function App() {
  const annasToDoList = [{id:1, text:"Call the landlord", done: false}, {id:2, text: "Book the dentist", done: false}];
  const konstantinaToDoList = [{id:3, text: "Buy milk", done: false}, {id:4, text: "Book the dentist", done: false}];

  return (
    <>
      <ToDoList firstName={"Anna"} incomingTodos={annasToDoList} />
      <ToDoList firstName={"Konstantina"} incomingTodos={konstantinaToDoList} />

      <ToDoPanel firstName={"Lea"}>
        <ol>
          <li>Prepare Figma Tutorial</li>
          <li>Prepare Assignment</li>
        </ol>
      </ToDoPanel>
    </>
  );
}

export default App;
