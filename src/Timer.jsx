import React, { useEffect, useState } from 'react'
import { formatTime } from './utils/formatTime'
import dateStore from './dateStore'
import useNow from './useNow'

const Timer = () => {
  const { endDate } = dateStore()
  // const nowDate = Date.now()
  // let [time, setTime] = useState(0)
  // console.log('time :>> ', time)

  // todo - получать текущ дату кажд секунду
  const difference = useNow(1000, endDate)

  // let difference = endDate
  //   ? endDate - nowDate
  //   : 0
  console.log('difference :>> ', difference)

  // useEffect(() => {
  //   if (endDate) {
  //     const duration = endDate - nowDate
  //     setTime(duration)
  //   } else {
  //     setTime(0)
  //   }
  // }, [endDate])

  // остановить выполнение кода если время = 0
  // if (time <= 0) return console.log('timer is over')

  //todo продолжить если больше нуля

  // const now = useNow(1000, endDate)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(duration - 1000)
  //   }, 1000)
  // }, [time])

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
