import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [win, setWin] = useState(false)


  function handleKeyPress(event) {
    if (event.key === 'a') {
      setWin(true)
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress)
  }, [])

  return (
    <main>
      {win ? <p>you win</p> : <h1>TYPE A</h1>}
    </main>
  );
}

export default App;