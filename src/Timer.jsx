import React, { useEffect, useState } from 'react'
import { formatTime } from './utils/formatTime'

const Timer = () => {
  const endDate = new Date("2024-07-24T19:00:00")
  const nowDate = Date.now()
  const duration = endDate.getTime() - nowDate

  const [time, setTime] = useState(duration)
  // остановить выполнение кода если время = 0
  if (duration <= 0) return console.log('timer is over')

  // продолжить если больше нуля
  useEffect(() => {
    setTimeout(() => {
      setTime(duration - 1000)
    }, 1000)
  }, [time])
  
  // console.log(formatTime(time))
  let timeObj = formatTime(time)

  return (
    <div>
      {timeObj && Object.keys(timeObj).map(key => (
        <p key={key}>
          {`${key}: ${timeObj[key]}`}
        </p>
      ))}
      {/* <p>{formatTime(time)}</p> */}
    </div>
  )
}

export default Timer
