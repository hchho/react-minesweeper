import React, { useState } from 'react'
import '../styles/Square.scss'

const Square = ({ endGame, hasMine, onClick, adjacentMines }) => {
  const [isRevealed, setIsRevealed] = useState(false)

  const revealedClass = hasMine ? 'hasMine' : 'empty'

  const handleClick = () => { 
    onClick()
    setIsRevealed(true) 
    handleEndGame()
  }

  const handleEndGame = () => {
    setTimeout(() => endGame(), 2000)
  }

  return (
    <div
      className={`app-arena__square app-arena__square--${isRevealed ? revealedClass : 'hidden'}`}
      onClick={!isRevealed && handleClick}
    >
    {isRevealed && !hasMine && !!adjacentMines && adjacentMines}
    </div>
  )
}

export default Square