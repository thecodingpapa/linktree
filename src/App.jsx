import { useState } from 'react'
import './App.css'
import "@fontsource/roboto"; // Defaults to weight 400.
import Link from './Link.jsx';
import logo from '/rainishere_l.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/channel/UC7v5yfvZhs-d5opF575AEhA" target="_blank">
          <img src={logo} className="logo" alt="Rainishere logo" />
        </a>
      </div>
      <h1>Rainishere</h1>
      <div className="card">
        <Link />
        
      </div>
      <p className="read-the-docs">
        Rainishere only work on projects above.
      </p>
    </>
  )
}

export default App
