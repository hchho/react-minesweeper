import React, { useState } from "react";
import { isGameActive, isGameComplete } from "../utils";
import { Timer } from "../timer";
import "./Controller.scss";
import { Modal } from "../modal";

const Child = () => (
  <div className="child">HOLY SHIT</div>
)

const InactiveController = ({ onChange, onClick }) => (
  <form>
    <label htmlFor="level">
      Difficulty level
      <select onChange={onChange}>
        <option value="1" defaultValue>
          Easy
        </option>
        <option value="2">Medium</option>
        <option value="3">Hard</option>
      </select>
    </label>
    <input type="button" value="Start" onClick={() => onClick()} />
  </form>
);

const Controller = ({
  endGame,
  gameStatus,
  generateConfigWithLevel,
  startGame
}) => {
  const [level, setLevel] = useState("1");
  const onChange = event => {
    setLevel(event.target.value);
  };

  const handleOnClick = () => {
    generateConfigWithLevel(level);
    startGame();
  };

  return isGameActive(gameStatus) || isGameComplete(gameStatus) ? (
    <>
      <div className="controller__active-container">
        <Timer endGame={endGame} />
        <input type="button" value="Restart Game" onClick={endGame} />
      </div>
      {isGameComplete(gameStatus) && <Modal><Child /></Modal>}
    </>
  ) : (
    <InactiveController onChange={onChange} onClick={handleOnClick} />
  );
};

export default Controller;
