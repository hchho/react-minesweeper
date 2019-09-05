import React from 'react'
import { Arena } from '../../arena'
import { Controller } from '../../controller'
import { Timer } from '../../timer'
import { isGameActive } from '../../utils'

const ActiveCanvas = ({ endGame }) => (
  <>
    <Timer endGame={endGame} />
    <Arena />
  </>
)

const Canvas = ({ startGame, endGame, gameStatus }) => {
  return (
    <div className="game-canvas">
      {isGameActive(gameStatus) ? <ActiveCanvas endGame={endGame} /> :<Controller startGame={startGame} />}
    </div>
  )
}

export default Canvas
