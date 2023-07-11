import React, {useEffect, useRef, useState } from 'react'
import './widget.css'
import {getWeather} from '../services/http.service'

const Widget = () => {
  const [weatherData, setWeatherData] = useState(null)
  const sityInput = useRef(null)

  const getValue = () => {
    const sityName = sityInput.current.value.trim()
    getWeather(sityName).then(data => setWeatherData({
      ...data,
      icon_src: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`  
    }))
  }

  return (
    <div className='wrapper'>
      <div className="search">
        <input ref={sityInput} type="text" defaultValue='London'/>
        {weatherData && <img src={weatherData.icon_src} />}
        <button onClick={getValue} >search</button>
      </div>
    </div>
  )
}

export default Widget