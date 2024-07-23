import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from './dateStore'

const Select = () => {
  const { endDate, setEndDate } = dateStore()
  // состояние введённой даты
  const [selectedData, setSelectedData] = useState({
    day: 0,
    month: 0,
    year: 0,
    hours: 0,
    minutes: 0
  })

  const setDate = () => {
    setEndDate(selectedData)
  }

  const toggleChange = (e, ) => {
    const value = e.target.value

    setSelectedData(prev => ({
      ...prev,
      day: value
    }))
      // todo - validate

    // if (Number(value) && String(value).length <= 2) {
      // if (Number(value) <= 31) {
      //   setSelectedData(prev => ({
      //     ...prev,
      //     day: value
      //   }))
      // } else {
      //   setSelectedData(prev => ({
      //     ...prev,
      //     day: 31
      //   }))
      // }
      // console.log(typeof value)
    // } else {
    //   return
    // }
  }

  // todo: сделать выбор даты через селекты
  // + сделать рендер компонентов от состояния, object...map()..
  // чтобы передать тип селекта для определения его в состоянии даты

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
          <input
            type="text"
            onChange={(e) => toggleChange(e)}
            value={selectedData.day}
          />
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
