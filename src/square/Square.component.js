import React, { forwardRef, useState } from 'react'
import './Square.scss'
import { isGameRunning } from '../utils'

const Square = ({ adjacentMines, endGame, hasMine, gameStatus, pauseGame }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const revealedClass = hasMine ? 'hasMine' : 'empty'

  const handleClick = () => { 
    if (isRevealed && !isGameRunning(gameStatus)) return undefined
    
    setIsRevealed(true) 
    
    if (hasMine) {
      pauseGame()
      handleEndGame()
    }
  }

  const handleEndGame = () => {
    setTimeout(() => endGame(), 2000)
  }

  return (
    <div
      className={`app-arena__square app-arena__square--${isRevealed ? revealedClass : 'hidden'}`}
      onClick={handleClick}
    >
      {isRevealed && !hasMine && !!adjacentMines && adjacentMines}
    </div>
  )
}

export default forwardRef(Square)