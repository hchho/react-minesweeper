import React, { useEffect } from "react";
import "./Square.scss";
import { isGameRunning, isWithinBounds } from "../utils";

const Square = ({
  adjacentMines,
  boardSize,
  column,
  endGame,
  gameStatus,
  hasMine,
  isRevealed,
  pauseGame,
  revealSquare,
  row
}) => {
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

  const handleClick = () => {
    if (isRevealed && !isGameRunning(gameStatus)) return undefined;

    revealSquare(column, row);

    if (hasMine) {
      pauseGame();
      handleEndGame();
    }
  };

  const handleEndGame = () => {
    setTimeout(() => endGame(), 2000);
  };

  return (
    <div
      className={`app-arena__square app-arena__square--${
        isRevealed ? revealedClass : "hidden"
      }`}
      onClick={handleClick}
    >
      {isRevealed && !hasMine && !!adjacentMines && adjacentMines}
    </div>
  );
};

export default Square;
