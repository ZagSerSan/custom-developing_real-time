import React, { useState } from 'react'
import './App.css'

function App() {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <>
      <div>
        <p>0</p>
        <button onClick={() => setSwitchOn(prev => !prev)}>
          {switchOn === false ? 'start' : 'stop'}
        </button>
      </div>
    </>
  )
}

export default App
