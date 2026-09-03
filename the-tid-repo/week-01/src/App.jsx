import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color: 'darkred'

    }}>ToDoList</h1>
      <ul style={{
        color: 'darkblue'
      }}>
        <li>Milk</li>
        <li>Yoghurt</li>
    </ul>
    </>
  )
}

export default App
