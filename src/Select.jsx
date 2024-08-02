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
  // todo - на этой сущности построить селект и её изменение и измен селекта
  // console.log('initialDate :>> ', initialDate)

  // состояние введённой даты
  const [selectedData, setSelectedData] = useState(
    {
      day: 0,
      month: 0,
      year: 0,
      hours: 0,
      minutes: 0
    }
  )

  const setDate = () => {
    setEndDate(selectedData)
  }

  const toggleChange = (e, type) => {
    const value = e.target.value
    // console.log('type :>> ', type)
    // console.log('value :>> ', value)

    
    // setSelectedData(prev => ({
      //   ...prev,
      //   [type]: value
      // }))

    // todo - переделать на выпадающие селекты + validate
    // if (validator(value, type, selectedData.year, selectedData.month)) {
      // setSelectedData(prev => ({
      //   ...prev,
      //   [type]: value
      // }))
      // console.log('selectedData :>> ', selectedData)
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

        {Object.keys(initialDate).map(key => (
          // <p>{key}: {selectedData[key]}</p>
          // todo - вывод переиспол. компонента селекта
          // <DateSelect selectedData={selectedData}/>

          <div>
            <p>{key}</p>

            <select onChange={(e) => toggleChange(e, key)} value={initialDate}>
              {initialDate[key].options
                ? initialDate[key].options.map(option => (
                    <option value={option}>{option}</option>
                  ))
                : <option value="">---</option>
              }
              
            </select>
          </div>
        ))}

      </div>

      <button onClick={setDate}>select data</button>
    </div>
  ) 
}

export default Select
