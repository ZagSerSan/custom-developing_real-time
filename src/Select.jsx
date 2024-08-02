import React, { useState } from 'react'
import "./select.css"
import dateStore from './dateStore'
// import { validator } from './utils/validator'
// import DateSelect from './DateSelect'
import { arrayFromNum } from './utils/arrayFromNum'

const Select = () => {
  const { endDate, setEndDate } = dateStore()

  // получение текущей даты и создание сущности исходной даты для селекта
  const currDate = new Date()
  // todo - изменение макс кол-ва дней в зависимости от выбранного месяца
  const maxDaysCount = (new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0)).getDate()

  const [initialDate, setInitialDate] = useState({
    year: {
      current: currDate.getFullYear(),
      options: [currDate.getFullYear(), currDate.getFullYear() + 1]
    },
    month: {
      current: currDate.getMonth() + 1,
      options: arrayFromNum(12)
    },
    day: {
      current: currDate.getDate(),
      options: arrayFromNum(maxDaysCount)
    },
    hours: {current: currDate.getHours(), options: arrayFromNum(23)},
    minutes: {current: currDate.getMinutes(), options: arrayFromNum(59)}
  })

  // состояние введённой даты
  const [selectedData, setSelectedData] = useState(
    {
      day: initialDate.day.current,
      month: initialDate.month.current,
      year: initialDate.year.current,
      hours: initialDate.hours.current,
      minutes: initialDate.minutes.current
    }
  )

  const setDate = () => {
    // todo - финальная передача endDate в стор для таймера
    // setEndDate(selectedData)
    console.log('selectedData :>> ', selectedData)
  }

  const toggleChange = (e, type) => {
    const value = e.target.value

    // todo - переделать на выпадающие селекты + validate
    // if (validator(value, type, selectedData.year, selectedData.month)) {
      setSelectedData(prev => ({
        ...prev,
        [type]: value
      }))
      // console.log('selectedData :>> ', selectedData)
    // }

  }

  return (
    <div className='select'>
      <h3>select data and time</h3>

      <div className='select__wrapper'>
        {Object.keys(initialDate).map(key => (
          <div key={key}>
            <p>- {key} -</p>

            <select onChange={(e) => toggleChange(e, key)} value={selectedData[key]}>
              {initialDate[key].options
                ? initialDate[key].options.map(option => (
                    <option
                      key={option}
                      value={option}
                      selected={selectedData[key] === option}
                    >
                      {option}
                    </option>
                  ))
                : <option key={option} value="">---</option>
              }
            </select>
          </div>
        ))}
      </div>

      <button onClick={setDate}>set end date</button>
    </div>
  ) 
}

export default Select
