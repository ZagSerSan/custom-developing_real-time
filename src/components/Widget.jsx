import React, {useRef, useState } from 'react'
import './widget.css'
import {getWeather} from '../services/http.service'

const Widget = () => {
  const [weatherData, setWeatherData] = useState(null)
  const sityInput = useRef(null)
  
  const getValue = () => {
    const sityName = sityInput.current.value.trim()
    const data = getWeather(sityName)
    console.log(data)
  }

  return (
    <div className='wrapper'>
      <div className="search">
        <input ref={sityInput} type="text" defaultValue='London'/>
        <button onClick={getValue} >search</button>
      </div>
    </div>
  )
}

export default Widget