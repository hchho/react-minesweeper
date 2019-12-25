import React, { useEffect } from "react";
import { Square } from "../square";
import "./Arena.scss";

const Row = ({ columns, mines = [], row }) => {
  const hasMines = (xCoord, yCoord) =>
    !!mines.find(e => e.x === xCoord && e.y === yCoord);

  return (
    <div className="app-arena__row">
      {columns.map((elem, index) => (
        <Square
          key={index}
          row={row}
          column={index}
          hasMine={hasMines(index, row)}
          adjacentMines={elem}
        />
      ))}
    </div>
  );
};

const Arena = ({
  endGame,
  generateMines,
  gameConfig: {
    size: { rows, columns }
  },
  mines,
  pauseGame,
  revealedSquares
}) => {
  const countAdjacentMines = (xCoord, yCoord) => {
    let acc = 0;
    for (let i = xCoord - 1; i <= xCoord + 1; ++i) {
      for (let j = yCoord - 1; j <= yCoord + 1; ++j) {
        if (mines.find(val => val.x === i && val.y === j)) {
          ++acc;
        }
      }
    }
    return acc;
  };

  const createSquares = (rows, columns) =>
    [...new Array(rows)].map((row, rowIndex) =>
      [...new Array(columns)].map((_elem, columnIndex) =>
        countAdjacentMines(columnIndex, rowIndex)
      )
    );

  const squares = createSquares(rows, columns);

  useEffect(() => {
    generateMines();
  }, [generateMines]);

  useEffect(() => {
    if (rows * columns - revealedSquares.length === mines.length) {
      pauseGame();
      alert("YOU DID IT");
      setTimeout(() => endGame(), 2000);
    }
  }, [columns, endGame, mines.length, pauseGame, revealedSquares, rows]);

  return (
    <div className="game-arena">
      {squares.map((elem, index) => (
        <Row columns={elem} key={index} mines={mines} row={index} />
      ))}
    </div>
  );
};

export default Arena;
