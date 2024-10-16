import React, { useEffect, useState } from 'react'
import "./select.css"
import dateStore from '../store/dateStore'
import { arrayFromNum } from '../utils/arrayFromNum'
import { formatDate } from '../utils/formatDate'
import { getCurrDate } from '../utils/getCurrDate'

// todo 1 убрать секунды (выбирать дату минимум до следующего часа в будущем)

const Select = () => {
  const { endDate, setEndDate, resetEndDate } = dateStore()
  
  // получение текущей даты
  const [selectedData, setSelectedData] = useState(getCurrDate())

  // изменение макс кол-ва дней в зависимости от выбранного месяца
  useEffect(() => {
    // переменная откуда начинать отсчёт дней месяца
    // если месяц не текущий, то начинать от 1 дня, а не от текущего как в текущем месяце

    // если выбраный месяц = текущему, то считать то текущего дня
    if (selectedData.month === getCurrDate('month')) {
      setInitialDate(prev => ({
        ...prev,
        day: {options: arrayFromNum(
          (new Date(getCurrDate('year'), getCurrDate('month'), 0)).getDate(),
          getCurrDate('day')
        )}
      }))
    } else {
      // если выбраный месяц != текущему, то считать от 1 дня месяца
      // передаёт нетекущий месяц, а выбраный: selectedData.month
      setInitialDate(prev => ({
        ...prev,
        day: {options: arrayFromNum(
          (new Date(getCurrDate('year'), selectedData.month, 0)).getDate(),
          1
        )}
      }))
    }
  }, [selectedData.month])

  // изменение макс кол-ва месяцев в зависимости от выбранного года
  useEffect(() => {
    // если выбран текущий год => в селект генер месяцы от текущего
    if (selectedData.year === getCurrDate('year')) {
      setInitialDate(prev => ({
        ...prev,
        month: {options: arrayFromNum(12, getCurrDate('month'))}
      }))
      // и меняем выбраный месяц на текущий (для перехода из опции след года)
      setSelectedData(prev => ({
        ...prev,
        month: getCurrDate('month')
      }))
    } else {
      // если выбран не текущий год => в селект генер месяцы от 1
      setInitialDate(prev => ({
        ...prev,
        month: {options: arrayFromNum(12, 1)}
      }))
      // и меняем выбраный месяц на 1 (просто для сброса)
      setSelectedData(prev => ({
        ...prev,
        month: 1
      }))
    }
  }, [selectedData.year])

  // исходное состояние оцпий селекта 
  const [initialDate, setInitialDate] = useState({
    year: {
      options: [getCurrDate('year'), getCurrDate('year') + 1]
    },
    month: {
      options: arrayFromNum(12, getCurrDate('month'))
    },
    day: {
      options: arrayFromNum(
        (new Date(getCurrDate('year'), getCurrDate('month') + 1, 0)).getDate(),
        getCurrDate('day')
      )
    },
    hours: {
      options: arrayFromNum(23, getCurrDate('hours'))
    },
    minutes: {
      options: arrayFromNum(59, getCurrDate('minutes'))
    }
  })

  // перезапись состояния выбраной даты при изменении значений селекта на сайте
  const toggleChange = (e, type) => {
    const value = e.target.value
    setSelectedData(prev => ({
      ...prev,
      [type]: Number(value)
    }))
  }

  // отправка даты из селекта в стор (конечный пункт компонента)
  const setDate = () => {
    setEndDate(formatDate(selectedData))
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

      <button onClick={setDate} disabled={endDate}>set date</button>
      <button onClick={resetEndDate}>reset date</button>
    </div>
  ) 
}

export default Select
