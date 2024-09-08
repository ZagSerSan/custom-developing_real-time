import React from 'react'
import './App.css'
import Timer from './components/Timer'
import Select from './components/Select'

function App() {

  return (
    <div className='app'>
      <Select />
      <hr/>
      <Timer />
    </div>
  )
}

export default App
