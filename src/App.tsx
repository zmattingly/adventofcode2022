import React from 'react'
import logo from './logo.svg'
import './App.css'

import Day01 from './days/01/01'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <Day01 />
      </section>
    </div>
  )
}

export default App
