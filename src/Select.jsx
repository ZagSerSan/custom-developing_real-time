import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from './dateStore'

const Select = () => {
  const [endData, setEndData] = useState({})

  const { getDateValue } = dateStore()

  const getDate = (params) => {
    console.log('fucn')

    getDateValue
      ? getDateValue(params)
      : console.log('no date')
  }

  // todo: сделать выбор даты через селекты относительно текущего месяца 
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
          <input type="text" defaultValue={2024}/>
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

      <button onClick={() => getDate('22.07.2024T19:20')}>select data</button>
    </div>
  ) 
}

export default Select
