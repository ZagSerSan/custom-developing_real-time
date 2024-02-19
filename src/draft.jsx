// import React, { useEffect, useState } from 'react'
// import moment from 'moment'

// const Timer = () => {
//   let [timerDate, setTimerDate] = useState()

//   const dateNow = moment()
//   const endTime = moment('2024-02-19T17:00:00')
  // const duration = moment.duration(endTime.diff(dateNow))
  // const duration = moment.duration(endTime.diff(dateNow))
  // const days = duration.asDays()

  // console.log('duration._data :>> ', duration._data);

  // console.log(
  //   days < 1
  //   ? '{days: 0}'
  //   : '{days: 1}'
  // )

  // let updateTimer = () => {
  //   if (moment() > endTime) {
  //     clearInterval(timer)
  //     console.log('Timer is over')
  //   } else {
  //     const { _data: diffDate } = moment.duration(endTime.diff(dateNow))
  //     setTimerDate(diffDate)
  //     console.log('diffDate :>> ', diffDate.seconds)
  //     // setTimerDate(moment(endTime.diff(Date.now())).format("DD:HH:mm:ss"))
  //     // setTimerDate(moment(endTime - moment()))
  //   }
  // }
  // let timer = setInterval(updateTimer, 1000)

  // useEffect(() => {
  //   console.log('date was updated')
  // }, [moment()])


  // let a = moment();
  // let b = moment('2024-02-15T14:00:00');
  // let diff_s = b.diff(a, 'seconds');
  // console.log(
  //   moment.utc(moment.duration(diff_s, "seconds").asMilliseconds()).format("DD hh:mm:ss")
  // )

  // useEffect(() => {
    // console.log('dateNow=>', dateNow.format("DD HH:mm:ss"))
    // console.log('endTime=>', endTime.format("DD HH:mm:ss"))
    // let formated = duration.asDays() < 1
    //   ? duration.format("HH:mm:ss")
    //   : duration.format("DD HH:mm:ss")
    // console.log('hours :>> ', hours)
  // }, []);
  // timerDate && console.log(timerDate.format("DD HH:mm:ss"))

  // let updateTimer = () => {
  //   if (Date.now() > endTime) {
  //     clearInterval(timer)
  //     console.log('Timer is over')
  //   } else {
  //     setTimerDate(moment.utc(endTime.diff(Date.now())).format("DD:HH:mm:ss"))
  //     setTimerDate(moment(endTime - moment()))
  //   }
  // }
  // let timer = setInterval(updateTimer, 1000)

  // return (
    // <div>
      {/* <p>{timerDate}</p> */}
      {/* <p>timerDate</p> */}
    {/* </div> */}
  // )
// }

// export default Timer
