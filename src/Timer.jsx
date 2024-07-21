import React, { useEffect, useState } from 'react'

const Timer = () => {
  const endDate = new Date("2024-07-21T19:00:00")
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

  const formatTime = (milisecundes) => {
    let days = Math.floor(milisecundes / 1000 / 60 / 60 / 24)
    let hours = Math.floor(milisecundes / 1000 / 60 / 60 % 24)
    let minutes = Math.floor(milisecundes / 1000 / 60 % 60)
    let secundes = Math.floor(milisecundes / 1000 % 60)

    // if (milisecundes <= 0 ) return 'timer is over!'
    // return `${days} days | ${hours} hours | ${minutes} minutes | ${secundes} secundes`
    if (milisecundes <= 0 ) return {}
    return { days, hours, minutes, secundes }
  }
  
  // console.log(formatTime(time))
  let timeObj = formatTime(time)

  return (
    <div>
      {Object.keys(timeObj).map(key => (
        <p key={key}>
          {`${key}: ${timeObj[key]}`}
        </p>
      ))}
      {/* <p>{formatTime(time)}</p> */}
    </div>
  )
}

export default Timer
