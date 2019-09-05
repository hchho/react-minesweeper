import React, { useState } from 'react'
import '../styles/Square.scss'
import { isGameRunning } from '../../utils'

const Square = ({ adjacentMines, endGame, hasMine, gameStatus, onClick, pauseGame }) => {
  const [isRevealed, setIsRevealed] = useState(false)

  const revealedClass = hasMine ? 'hasMine' : 'empty'

  const handleClick = () => { 
    if (!isGameRunning(gameStatus)) return
    
    onClick()
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
      onClick={isRevealed ? undefined: handleClick}
    >
    {isRevealed && !hasMine && !!adjacentMines && adjacentMines}
    </div>
  )
}

export default Square