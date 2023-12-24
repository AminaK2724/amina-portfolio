import React, { useState, useEffect } from 'react'

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update every 1000 milliseconds (1 second)

    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, []) // Empty dependency array ensures the effect runs only once on mount

  const formattedTime = currentTime.toLocaleTimeString()

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  )
}

export default Clock
