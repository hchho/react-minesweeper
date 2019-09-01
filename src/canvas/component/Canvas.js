import React from 'react'
import { Arena } from '../../arena'
import { Controller } from '../../controller'
import { Timer } from '../../timer'

const Canvas = ({ startGame, endGame, isGameActive}) => {
  return (
  <div className="game-canvas">
    {isGameActive ? [
      <Timer endGame={endGame} />,
      <Arena />
     ] : 
      <Controller startGame={startGame} />
    }
  </div>
)}

export default Canvas
