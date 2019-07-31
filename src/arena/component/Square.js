import React, { useState } from 'react'

const Square = ({ hasMine, onClick }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const handleClick = () => { 
    onClick()
    setIsRevealed(true) 
  }
  const revealedColor = hasMine ? 'red' : 'grey'
  return (
    <div
      className='app-arena__square'
      onClick={!isRevealed && handleClick}
      style={{
        backgroundColor: isRevealed ? revealedColor : 'black'
      }}
    >
    </div>
  )
}

export default Square