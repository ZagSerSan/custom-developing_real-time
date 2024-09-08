import React, { useEffect, useState } from 'react'
let interval

const useNow = (updateInteraval, enabled, cb) => {
  // updateInteraval - частота обновления таймера
  // enabled - выключить функцию если не нужна (при выкл таймере)
    // засунул сюда конечное время
  // cb - callback выполняющийся каждый интервал updateInteraval
  // использовать например для отключения таймера в конце (прописать условия в функции)

  const [now, setNow] = useState(0)

  useEffect(() => {
    if (!enabled) {
      clearInterval(interval)
      interval = null
      setNow(0)
      return
    }

    interval = setInterval(() => {
      setNow(Date.now())
    }, updateInteraval)
  }, [enabled])

  return now
}

export default useNow