import React from 'react'
import { Arena } from '../../arena'
import { Controller } from '../../controller'
import { Timer } from '../../timer'
import { isGameActive } from '../../utils'

const Canvas = ({ startGame, endGame, gameStatus}) => {
  return (
  <div className="game-canvas">
    {isGameActive(gameStatus) ? [
      <Timer endGame={endGame} />,
      <Arena />
     ] : 
      <Controller startGame={startGame} />
    }
  </div>
)}

export default Canvas
