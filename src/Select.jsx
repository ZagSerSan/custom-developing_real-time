import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from './dateStore'

const Select = () => {
  const [endData, setEndData] = useState({})
  const { getDateValue } = dateStore()

  console.log(Boolean(getDateValue))
  // console.log(getDateValue ? getDateValue : 'null')

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

      {getDateValue
        ? <button onClick={() => getDateValue('22.07.2024T19:20')}>select data</button>
        : <button disabled={true}>select data</button>
      }

      {/* {getDateValue
      ? (
        <button onClick={getDateValue('22.07.2024T19:20')}>select data</button>
      )
      : (null)
      } */}
    </div>
  ) 
}

export default Select
