import React, { useEffect, useState } from 'react'
let interval

const useNow = (updateInteraval, endDate, cb) => {
  // updateInteraval - частота обновления таймера
  // enabled (endDate) - выключить функцию если не нужна (при выкл таймере)
    // засунул сюда конечное время
  // cb - callback выполняющийся каждый интервал updateInteraval
  // использовать например для отключения таймера в конце (прописать условия в функции)

  // const [now, setNow] = useState(0)
  const [difference, setDifference] = useState(0)

  useEffect(() => {
    if (!endDate) {
      clearInterval(interval)
      interval = null
      setDifference(0)
      return
    }

    interval = setInterval(() => {
      // устанавливать разницу даты
      setDifference(endDate - Date.now())
    }, updateInteraval)
  }, [endDate])

  return difference
}

export default useNow
