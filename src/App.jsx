import React, { useState } from 'react'
import './App.css'
import moment from 'moment'

function App() {
  const endTime = moment('2024-02-09 04:30:00')
  let [timerDate, setTimerDate] = useState(
  )

  console.log(endTime.format("DD HH:mm:ss"))
  timerDate && console.log(timerDate.format("DD HH:mm:ss"))

  let updateTimer = () => {
    if (Date.now() > endTime) {
      clearInterval(timer)
      console.log('Timer is over')
    } else {
      // setTimerDate(moment.utc(endTime.diff(Date.now())).format("DD:HH:mm:ss"))
      setTimerDate(moment(endTime - moment()))
    }
  }
  let timer = setInterval(updateTimer, 1000)

  return (
    <>
      <div>
        {/* <p>{timerDate}</p> */}
        <p>timerDate</p>
      </div>
    </>
  )
}

export default App
