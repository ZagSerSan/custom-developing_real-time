import React, {useEffect, useRef, useState } from 'react'
import './widget.css'
import {getWeather} from '../services/http.service'
import search_icon from '../assets/search.svg'

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
    <div className='search'>
      <div className="search-place">
        <input ref={sityInput} type="text" defaultValue='London'/>
        <button onClick={getValue}>
          <img src={search_icon} alt="Найти" />
        </button>
      </div>
      {weatherData && (
        <div className="info">
          <img src={weatherData.icon_src} />
          <p className="info__cels">
            {weatherData.main.temp.toString().slice(0,2)} °C
          </p>
          <p className="info__descrip">
            {weatherData.weather[0].description}
          </p>
          <div className='info-colums'>
            <p className='info-colums__col'>humidity: {weatherData.main.humidity}</p>
            <p className='info-colums__col'>Wind speed: {weatherData.wind.speed}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Widget