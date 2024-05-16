import React, { useEffect, useState } from 'react'
import "./select.css"

const Select = () => {
  const [endData, setEndData] = useState({})

  return (
    <div className='select'>
      <h3>select data and time</h3>

      {/* день/месяц/год */}
      <div className='select__wrapper'>
        <div className="select-item">
          <label htmlFor="day">day</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="month">month</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="year">year</label>
          <input type="text" value={2024}/>
        </div>
      </div>

      {/* часы/минуты */}
      <div className='select__wrapper'>
        <div className="select-item">
          <label htmlFor="hours">hours</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="minutes">minutes</label>
          <input type="text" />
        </div>
      </div>

      <button>select data</button>
    </div>
  ) 
}

export default Select
