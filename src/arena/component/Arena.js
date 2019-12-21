import React, { createRef, useEffect, useRef } from 'react'
import { Square } from '../../square'
import '../styles/Arena.scss'

const Row = ({ columns, mines = [], row }) => {
  
  const countAdjacentMines = (xCoord, yCoord) => mines.reduce((acc, val) => {
    if (Math.abs(yCoord - val.y) === 1 && Math.abs(xCoord - val.x) === 1) {
      return ++acc
    } else if ((yCoord === val.y && Math.abs(xCoord - val.x) === 1) || (Math.abs(yCoord - val.y) === 1 && xCoord === val.x)) {
      return ++acc
    }
    return acc
  }, 0)
  
  const hasMines = (xCoord, yCoord) => !!mines.find(e => e.x === xCoord && e.y === yCoord)

  return (
  <div className='app-arena__row'>
    {columns.map((elem, index) => 
      <Square 
        key={index} 
        hasMine={hasMines(index, row)} 
        adjacentMines={countAdjacentMines(index, row)} 
        ref={elem}
        onClick={() => elem.current.revealSquare()}
      />
    )}
  </div>
)}

const Arena = ({ generateMines, gameConfig: { size: { rows, columns } }, mines }) => {
  
  const createSquares = (rows, columns) => [...new Array(rows)].map((row, rowIndex) => [...new Array(columns)].map(() => createRef()))
  const squares = createSquares(rows, columns)
  const squareRefs = useRef(squares)

  useEffect(() => { 
    generateMines() 
  }, [])

  return (
    <div className="game-arena">
      {squares.map((elem, index) => <Row columns={elem} key={index} mines={mines} row={index} rowRef={squareRefs.current[index]} />)}
    </div>
)}

export default Arena
