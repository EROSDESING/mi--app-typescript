import React, { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  milisegundos: number
}

export const Time = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0)

  const ref = useRef<NodeJS.Timeout>()

  useEffect(() => {
    ref.current && clearInterval(ref.current)

    ref.current = setInterval(() => setSegundos((t) => t + 1), milisegundos)
  }, [milisegundos])
  return (
    <>
      <h4>
        Time: <small>{segundos}</small>
      </h4>
    </>
  )
}
