
import './App.css'
import BookItem from './components/BookItem'
import { useEffect, useState } from 'react';
import NewBookForm from './components/NewBookForm';
import Parse from 'parse';
import { fetchBooks, createBook, setBookRead, deleteBook } from './services/bookService';

Parse.initialize("ajlHyoO5UM9xxYXGo996wmrDzRlv3ru33K9zjMvf", "WJ60UTcTolxFOB2J0lbMLk2YwpKkXSYjggNE0wxI");
Parse.serverURL = "https://parseapi.back4app.com";


function App() {
 const [books, setBooks] = useState([]);

 useEffect(() =>{
  async function load() {
    setBooks(await fetchBooks());
    
  }
  load();
 }, []);

 async function handleAdd(text){
  const created = await createBook(text)
  setBooks([...books,{id: crypto.randomUUID(), title: text, read: false}])
 }

 function handleToggle(id){

 
 setBooks(books.map((b) => (b.id === id ? {...b, read: !b.read}: b)))
 }

 function handleRemove(id){
   setBooks(books.filter((b) => b.id !== id));
 }
  return (
    <>
      <h1>
        Reading list        
      </h1>
      <div>
        <NewBookForm onAdd={handleAdd}/>
      </div>
      
      {books.length === 0
      ? <p> No books in the list</p>
    : < ul>
      {books.map((b) => (
        <BookItem
      key={b.id}
      book={b}
      onToggle={handleToggle}
      onRemove={handleRemove}
      />
    ))}

      </ul>
}
    </>
  )
}


export default App
