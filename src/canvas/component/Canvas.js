import React, { useState } from 'react'
import Arena from '../../arena/container/Arena'
import { Controller } from '../../controller'

const Timer = ({ endGame }) => {
  const [count, setCount] = useState(0)
  setTimeout(() => { setCount(count + 1) }, 1000)
  if (count === 20) endGame()
  return (
    <div>
      {count}
    </div>
  )
}

const Canvas = () => {
  const [isGameActive, setIsGameActive] = useState(false)
  const startGame = () => {
    setIsGameActive(true)
  }
  const endGame = () => {
    setIsGameActive(false)
  }
  return (
  <div className="game-canvas">
    {isGameActive ? <Timer endGame={endGame} /> : <Controller startGame={startGame} />}
    {isGameActive && <Arena />}
  </div>
)}

export default Canvas
