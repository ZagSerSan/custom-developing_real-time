import React from 'react'
import './App.css'
import Timer from './Timer'

function App() {
  const forwDate = new Date("2024-02-19T17:00:00")
  const duration = forwDate.getTime() - Date.now()

  return (
    <div className='app'>
      <Timer duration={duration}/>
    </div>
  )
}

export default App
