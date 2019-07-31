import React, { useEffect, useState } from 'react'
import Square from './Square'
import '../styles/Arena.scss'

const Row = ({ columns, mines, handleSquareClick }) => (
  <div className='app-arena__row'>{columns.map((elem, index) => 
    <Square key={index} hasMine={!!mines[elem]} onClick={handleSquareClick} />
  )}</div>
)

const Arena = ({ createSquares, generateMines, gameConfig: { size: { rows, columns } }, mines = {} }) => {
  useEffect(() => { generateMines() }, [])
  const squares = createSquares(rows, columns)
  const [revealedSquares, setRevealedSquares] = useState(0)
  const handleSquareClick = () => {
    setRevealedSquares(revealedSquares + 1)
  }
  return (
  <div className="game-arena">
    {squares.map((elem, index) => <Row columns={elem} key={index} mines={mines} {...{ handleSquareClick }}/>)}
  </div>
)}

export default Arena
