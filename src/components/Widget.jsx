import React, {useEffect, useRef, useState } from 'react'
import './widget.css'
import {getWeather} from '../services/http.service'
import search_icon from '../assets/search.svg'
import humidity_icon from '../assets/humidity.svg'
import wind_icon from '../assets/wind.svg'
import loading_icon from '../assets/loading.svg'

const Widget = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [firstState, setFirstState] = useState(true)
  const sityInput = useRef(null)

  const getValue = () => {
    setFirstState(false)
    const sityName = sityInput.current.value.trim()
    getWeather(sityName).then(data => setWeatherData({
      ...data,
      icon_src: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`  
    }))

    const el = document.querySelector('.search')
    el.style.height = '190px'
  }

  return (
    <div className='search'>
      <div className="search-place">
        <input ref={sityInput} type="text" defaultValue='London'/>
        <button onClick={getValue}>
          <img src={search_icon} alt="Search"/>
        </button>
      </div>

      {weatherData ? (
        <div className="info">

          <div className="info__col">
            <img className='info__weather-img' src={weatherData.icon_src} />

            <div className="info__row">
              <p className="info__cels">
                {weatherData.main.temp.toString().slice(0,2)} °C
              </p>
              <p className="info__descrip">
                {weatherData.weather[0].description}
              </p>
            </div>

          </div>
          <div className="info-col">
            <div className='info-humidity'>
              <img src={humidity_icon} alt="Search"/>
              <div className="info-humidity__col">
                <p>{weatherData.main.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className='info-wind'>
              <img src={wind_icon} alt="Search"/>
              <div className="info-wind__col">
                <p>{weatherData.wind.speed} <span><b>Km/h</b></span></p>
                <span>Wind speed</span>
              </div>
            </div>
          </div>
        </div>
      ) : !firstState ? (
      <div className="loading-icon">
        <img className='loading-icon' src={loading_icon}/>
      </div>) : null}
    </div>
  )
}

export default Widget