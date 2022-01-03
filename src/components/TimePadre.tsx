import React, { useState } from 'react'
import { Time } from './Time'

export const TimePadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000)
  return (
    <>
      <span>Milisegundos: {1000}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisegundos(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMilisegundos(3000)}
      >
        3000
      </button>
      <Time milisegundos={milisegundos} />
    </>
  )
}
