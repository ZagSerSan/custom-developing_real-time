import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from './dateStore'

const Select = () => {
  const { endDate, setEndDate } = dateStore()
  // состояние введённой даты
  const [selectedData, setSelectedData] = useState('23.07.2024T14:30')

  const setDate = () => {
    setEndDate(selectedData)
  }

  // todo: сделать выбор даты через селекты относительно текущего месяца 
  return (
    <div className='select'>
      {endDate
        ? <h3>select data and time: {endDate}</h3>
        : <h3>select data and time</h3>
      }

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

      <button onClick={setDate}>select data</button>
    </div>
  ) 
}

export default Select
