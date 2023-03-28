import React, { useState } from 'react'
import Header from './components/Header'
import Container from './components/Container'
import './styles/style.css'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className="App">
      <Header 
        score={score} 
        bestScore={bestScore}
      />
      <Container
        score={score} 
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App