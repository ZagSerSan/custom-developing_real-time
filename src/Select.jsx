import React, { useState } from 'react'
import "./select.css"
import dateStore from './dateStore'
import { validator } from './utils/validator'
import DateSelect from './DateSelect'

const Select = () => {
  const { endDate, setEndDate } = dateStore()

  // получение текущей даты и создание сущности исходной даты для селекта
  const currDate = new Date()
  const maxDaysCount = (new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0)).getDate()

  const [initialDate, setInitialDate] = useState({
    year: {current: currDate.getFullYear(), max: currDate.getFullYear() + 1},
    month: {current: currDate.getMonth() + 1, max: 12},
    day: {current: currDate.getDate(), max: maxDaysCount},
    hours: {current: currDate.getHours(), max: 23},
    minutes: {current: currDate.getMinutes(), max: 59}
  })
  console.log('initialDate :>> ', initialDate)

  // состояние введённой даты
  const [selectedData, setSelectedData] = useState(
    {
      day: 1,
      month: 7,
      year: 2024,
      hours: 0,
      minutes: 0
    }
  )

  const setDate = () => {
    setEndDate(selectedData)
  }

  const toggleChange = (e, type) => {
    const value = e.target.value
    console.log('type :>> ', type)
    console.log('value :>> ', value)

    // todo - переделать на выпадающие селекты + validate
    // if (validator(value, type, selectedData.year, selectedData.month)) {
    //   setSelectedData(prev => ({
    //     ...prev,
    //     [type]: value
    //   }))
    // }

  }

  // todo: сделать выбор даты через селекты
  // + сделать рендер компонентов от состояния, object...map()..
  // чтобы передать тип селекта для определения его в состоянии даты

  return (
    <div className='select'>
      {endDate
        ? <h3>select data and time: endDate</h3>
        : <h3>select data and time</h3>
      }

      {/* день/месяц/год */}
      <div className='select__wrapper'>

        {Object.keys(selectedData).map(key => (
          // <p>{key}: {selectedData[key]}</p>
          // todo - вывод переиспол. компонента селекта
          // <DateSelect selectedData={selectedData}/>

          <div>
            <p>{key}</p>

            <select onChange={(e) => toggleChange(e, key)} value={selectedData.day}>
              <option value="">---</option>
              <option value="oneOption">One option</option>
              <option value="twoOption">Two option</option>
            </select>
          </div>
        ))}

        {/* <div className="select-item">
          <label htmlFor="day">day</label>
          <input
            type="text"
            onChange={(e) => toggleChange(e, 'day')}
            value={selectedData.day}
          />
        </div>
        <div className="select-item">
          <label htmlFor="month">month</label>
          <input
            type="text"
            onChange={(e) => toggleChange(e, 'month')}
            value={selectedData.month}
          />
        </div>
        <div className="select-item">
          <label htmlFor="year">year</label>
          <input
            type="text"
            onChange={(e) => toggleChange(e, 'year')}
            value={selectedData.year}
          />
        </div> */}
      </div>

      {/* часы/минуты */}
      {/* <div className='select__wrapper'>
        <div className="select-item">
          <label htmlFor="hours">hours</label>
          <input type="text" />
        </div>
        <div className="select-item">
          <label htmlFor="minutes">minutes</label>
          <input type="text" />
        </div>
      </div> */}

      <button onClick={setDate}>select data</button>
    </div>
  ) 
}

export default Select
