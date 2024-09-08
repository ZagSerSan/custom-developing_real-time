import React, { useEffect, useState } from 'react'
import { formatTime } from './utils/formatTime'
import dateStore from './dateStore'
let interval

const Timer = () => {
  const { endDate } = dateStore()
  const [difference, setDifference] = useState(0)
  const updateInteraval = 1000

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

  //todo вывести форматированную дату

  // console.log(formatTime(time))
  // let timeObj = formatTime(time)

  return (
    <div>
      <p>{difference}</p>
      {/* {timeObj && Object.keys(timeObj).map(key => (
        <p key={key}>
          {`${key}: ${timeObj[key]}`}
        </p>
      ))} */}
    </div>
  )
}

export default Timer
