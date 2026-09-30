import "./App.css";
import ToDoList from "./components/ToDoList.jsx";
import Parse from "parse";
import { useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";

Parse.initialize("ajlHyoO5UM9xxYXGo996wmrDzRlv3ru33K9zjMvf", "WJ60UTcTolxFOB2J0lbMLk2YwpKkXSYjggNE0wxI");
Parse.serverURL = "https://parseapi.back4app.com";

function App() {
const [user, setUser] = useState(Parse.User.current());

 function handleLogout() {
	Parse.User.logOut().then(() => setUser(null));
}
function handleAuthenticated(loggedInUser) {
setUser(loggedInUser);
}// return AuthPage if user is null
if (!user) return <AuthPage onAuthenticated={handleAuthenticated} />;
return (
    <>
<ToDoList
userId={user.id}/>

 <button onClick={handleLogout}>Logout</button>
</>

);
}

export default App;
