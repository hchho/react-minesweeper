import React, { useEffect, useState } from 'react'
import Square from './Square'
import '../styles/Arena.scss'

const Row = ({ columns, handleSquareClick, mines = [], row }) => {
  const countAdjacentMines = (xCoord, yCoord) => mines.reduce((acc, val) => {
    if (yCoord + 1 === val.y || yCoord - 1 === val.y) {
      if (Math.abs(xCoord - val.x) === 1) {
        return ++acc
      }
      return xCoord === val.x ? ++acc : acc
    } else if (yCoord === val.y) {
      return Math.abs(xCoord - val.x) === 1 ? ++acc : acc
    }
    return acc
  }, 0)
  const hasMines = (xCoord, yCoord) => !!mines.find(e => e.x === xCoord && e.y === yCoord)
  
  return (
  <div className='app-arena__row'>{columns.map((elem, index) => 
    <Square 
    key={index} 
    hasMine={hasMines(index, row)} 
    onClick={handleSquareClick} 
    adjacentMines={countAdjacentMines(index, row)} 
    />
  )}</div>
)}

const Arena = ({ createSquares, generateMines, gameConfig: { size: { rows, columns } }, mines }) => {
  useEffect(() => { generateMines() }, [])
  const squares = createSquares(rows, columns)
  const [revealedSquares, setRevealedSquares] = useState(0)
  const handleSquareClick = () => {
    setRevealedSquares(revealedSquares + 1)
  }
  return (
  <div className="game-arena">
    {squares.map((elem, index) => <Row columns={elem} key={index} mines={mines} handleSquareClick={handleSquareClick} row={index} />)}
  </div>
)}

export default Arena
