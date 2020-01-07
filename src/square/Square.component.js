import React, { useEffect, useState } from "react";
import "./Square.scss";
import { isGameRunning, isWithinBounds } from "../utils";

const Square = ({
  adjacentMines,
  boardSize,
  column,
  gameStatus,
  hasMine,
  isRevealed,
  pauseGame,
  revealSquare,
  row
}) => {
  const [isFlagged, setFlag] = useState(false)

  const revealedClass = hasMine ? "hasMine" : "empty";

  useEffect(() => {
    // Reveal the squares around it
    if (!adjacentMines && !hasMine && isRevealed) {
      for (let i = column - 1; i <= column + 1; ++i) {
        for (let j = row - 1; j <= row + 1; ++j) {
          if (isWithinBounds(i, j, boardSize)) { 
            revealSquare(i, j);
          }
        }
      }
    }
  }, [isRevealed, hasMine, adjacentMines, column, row, revealSquare, boardSize]);

  const handleLeftClick = () => {
    revealSquare(column, row);

    if (hasMine) {
      pauseGame();
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault()
    setFlag(!isFlagged)
  }

  return (
    <div
      className={`app-arena__square app-arena__square--${
        isRevealed ? revealedClass : isFlagged ? "flagged" : "hidden"
      }`}
      onContextMenu={handleRightClick}
      onClick={(isFlagged || isRevealed || !isGameRunning(gameStatus)) ? undefined : handleLeftClick}
    >
      {isRevealed && !hasMine && !!adjacentMines && adjacentMines}
    </div>
  );
};

export default Square;
