import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from './dateStore'
// import { validator } from './utils/validator'
// import DateSelect from './DateSelect'
import { arrayFromNum } from './utils/arrayFromNum'
import { formatDate } from './utils/formatDate'

// todo 3 - ограничить выбор прошедшей даты

const Select = () => {
  const { setEndDate, resetEndDate } = dateStore()
  // получение текущей даты и создание сущности исходной даты для селекта
  
  const currDate = new Date()
  // const maxDaysCount = (new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0)).getDate()
  // состояние введённой даты
  const [selectedData, setSelectedData] = useState(
    {
      year: currDate.getFullYear(),
      month: currDate.getMonth() + 1,
      day: currDate.getDate(),
      hours: currDate.getHours(),
      minutes: currDate.getMinutes()
    }
  )

  // изменение макс кол-ва дней в зависимости от выбранного месяца
  useEffect(() => {
    setInitialDate(prev => ({
      ...prev,
      day: {options: arrayFromNum(
        (new Date(selectedData.year, selectedData.month + 1, 0)).getDate()
      )}
    }))
  }, [selectedData.month])

  const [initialDate, setInitialDate] = useState({
    year: {
      options: [currDate.getFullYear(), currDate.getFullYear() + 1]
    },
    month: {
      options: arrayFromNum(12)
    },
    day: {
      options: arrayFromNum(
        (new Date(selectedData.year, selectedData.month + 1, 0)).getDate()
      )
    },
    hours: {
      options: arrayFromNum(23)
    },
    minutes: {
      options: arrayFromNum(59)
    }
  })

  const setDate = () => {
    // todo 1 - финальная передача endDate в стор для таймера
    setEndDate(formatDate(selectedData))

    // эту форматированную дату передать в стор для таймера
    // console.log('formatDate :>> ', formatDate(selectedData))
  }

  const toggleChange = (e, type) => {
    const value = e.target.value

    setSelectedData(prev => ({
      ...prev,
      [type]: Number(value)
    }))
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

      <button onClick={setDate}>set date</button>
      <button onClick={resetEndDate}>reset date</button>
    </div>
  ) 
}

export default Select
