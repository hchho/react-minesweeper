import React, { useState } from 'react'

const Square = ({ hasMine, onClick, adjacentMines }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const handleClick = () => { 
    onClick()
    setIsRevealed(true) 
  }
  const revealedClass = hasMine ? 'hasMine' : 'empty'
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