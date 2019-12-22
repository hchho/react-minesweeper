import React from 'react'
import { Arena } from '../arena'
import { Controller } from '../controller'
import { Timer } from '../timer'
import { isGameActive } from '../utils'
import './Canvas.scss'

const ActiveCanvas = ({ endGame }) => (
  <div className='canvas__active-container'>
    <Timer endGame={endGame} />
    <input type='button' value='Restart Game' onClick={endGame} />
    <Arena />
  </div>
)

const Canvas = ({ startGame, endGame, gameStatus }) => {
  return (
    <div className="game-canvas">
      {isGameActive(gameStatus) ? <ActiveCanvas endGame={endGame} /> :<Controller startGame={startGame} />}
    </div>
  )
}

export default Canvas
