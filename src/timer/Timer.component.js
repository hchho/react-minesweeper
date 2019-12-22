import React, { useState } from 'react'
import { isGameActive, isGamePaused } from '../utils'
import './Timer.scss'

const SECOND_IN_MS = 1000 

const Timer = ({ endGame, gameStatus, timeLimit }) => {
  const [count, setCount] = useState(0)

  setTimeout(() => { 
    if (isGameActive(gameStatus) && !isGamePaused(gameStatus)) {
      setCount(count + SECOND_IN_MS) 
    }
  }, SECOND_IN_MS)

  if (count === timeLimit) endGame()
  
  return (
    <div className='timer--counter'>
      {count / SECOND_IN_MS}
    </div>
  )
}

export default Timer