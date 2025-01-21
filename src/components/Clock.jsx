import dayjs from 'dayjs'
import React, { useLayoutEffect, useState } from 'react'

const Clock = ({ className }) => {
  const [time, setTime] = useState(dayjs())

  useLayoutEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(dayjs())
    }, 1000)

    return () => clearInterval(intervalTime)
  }, [])

  return (
    <div className={`card flex-col gap-1 text-3xl font-bold ${className}`}>
      <p className='align-top text-sm font-normal'>{time.format('A')}</p>
      <h1>{time.format('HH:mm')}</h1>
      <p className='text-sm font-normal'>{time.format('ss')}</p>
    </div>
  )
}

export default React.memo(Clock)
