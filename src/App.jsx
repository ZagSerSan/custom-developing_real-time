import React from 'react'
import './App.css'
import Timer from './Timer'

function App() {
  return (
    <div className='app'>
      <Timer duration={2 * (24 * 60 * 60 * 1000)}/>
    </div>
  )
}

export default App
