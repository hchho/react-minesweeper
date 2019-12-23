import React from 'react'
import { Arena } from '../arena'
import { Controller } from '../controller'
import { isGameActive } from '../utils'

const Canvas = ({ gameStatus }) => {
  return (
    <div className="game-canvas">
      <Controller />
      {isGameActive(gameStatus) && <Arena />}
    </div>
  )
}

export default Canvas
