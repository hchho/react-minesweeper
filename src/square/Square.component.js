import React from "react";
import "./Square.scss";
import { isGameRunning } from "../utils";

const Square = ({
  adjacentMines,
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
