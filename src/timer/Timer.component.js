import React, { useState } from 'react'
import { isGameActive, isGamePaused } from '../utils'
import './Timer.scss'

const SECOND_IN_MS = 1000 

const DELAY_IN_MS = 10

const Timer = ({ dispatchGameDuration, endGame, gameStatus, timeLimit }) => {
  const [count, setCount] = useState(0)

  setTimeout(() => { 
    if (isGameActive(gameStatus) && !isGamePaused(gameStatus)) {
      setCount(count + DELAY_IN_MS) 
    } else {
      dispatchGameDuration(count / DELAY_IN_MS)
    }
  }, DELAY_IN_MS)

  if (count === timeLimit) endGame()
  
  return (
    <div className='timer--counter'>
      {(count / SECOND_IN_MS).toFixed(2)} s
    </div>
  )
}

export default Timer
