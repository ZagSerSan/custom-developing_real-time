import React, { useEffect, useState } from 'react'

const Timer = () => {
  const endDate = new Date("2024-05-14T17:00:00")
  const nowDate = Date.now()
  const duration = endDate.getTime() - nowDate

  // console.log('duration :>> ', duration)

  const [time, setTime] = useState(duration)

  useEffect(() => {
    setTimeout(() => {
      setTime(duration - 1000)
    }, 1000)
  }, [time])

  const formatTime = (milisecundes) => {
    // let days = Math.floor(milisecundes / 1000 / 60 / 60)
    let hours = Math.floor(milisecundes / 1000 / 60 / 60)
    let minutes = Math.floor(milisecundes / 1000 / 60 % 60)
    let secundes = Math.floor(milisecundes / 1000 % 60)

    return `${hours} : ${minutes} : ${secundes}`
  }

  return (
    <div>
      <p>{formatTime(time)}</p>
    </div>
  )
}

export default Timer
