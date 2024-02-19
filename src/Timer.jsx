import React, { useEffect, useState } from 'react'

const Timer = ({duration}) => {
  const [time, setTime] = useState(duration)

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000)
    }, 1000)
  }, [time])

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(time / 1000))
    let total_minutes = parseInt(Math.floor(total_seconds / 60))
    let total_hours = parseInt(Math.floor(total_minutes / 60))
    let days = parseInt(Math.floor(total_hours / 24))

    let seconds = parseInt(Math.floor(total_seconds % 60))
    let minutes = parseInt(Math.floor(total_minutes % 60))
    let hours = parseInt(Math.floor(total_hours % 24))
    return `${days} : ${hours} : ${minutes} : ${seconds}`
  }

  return (
    <div>
      <p>{getFormattedTime(time)}</p>
    </div>
  )
}

export default Timer
