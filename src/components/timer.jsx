import { useState, useEffect } from "react"

const onComplete = () => {
  console.log("Timer completed")
}

function Timer({ durationInSeconds = 3600 }) {
  const [remainingTime, setRemainingTime] = useState(durationInSeconds)

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + durationInSeconds * 1000

    function tick() {
      const now = Date.now()
      const timeLeft = Math.max(0, endTime - now)

      setRemainingTime(Math.floor(timeLeft / 1000))

      if (timeLeft > 0) {
        setTimeout(tick, 1000)
      } else {
        onComplete()
      }
    }

    tick()
  }, [durationInSeconds, onComplete])

  const seconds = remainingTime % 60
  const minutes = Math.floor(remainingTime / 60) % 60

  return (
    <div>
      {minutes}:{seconds}
    </div>
  )
}

export default Timer
