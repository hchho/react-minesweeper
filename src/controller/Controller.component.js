import React, { useState } from "react";
import { isGameActive, isGameComplete } from "../utils";
import { Timer } from "../timer";
import "./Controller.scss";
import { Modal, ModalImpl } from "../modal";
import { Leaderboard } from "../leaderboard";
import { FirebaseComponent } from "../firebase";

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

const BaseController = ({
  endGame,
  gameStatus,
  generateConfigWithLevel,
  startGame
}) => {
  const [level, setLevel] = useState("1");
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);

  const onChange = event => {
    setLevel(event.target.value);
  };

  const handleOnClick = () => {
    generateConfigWithLevel(level);
    startGame();
  };

  const SubmitHighScoreBtn = () => (
    <input
      type="button"
      value="Submit highscore"
      onClick={() => setShowLeaderBoard(!showLeaderBoard)}
    />
  );

  return isGameActive(gameStatus) || isGameComplete(gameStatus) ? (
    <>
      <div className="controller__active-container">
        <Timer endGame={endGame} />
        <input type="button" value="Restart Game" onClick={endGame} />
        {isGameComplete(gameStatus) && <SubmitHighScoreBtn />}
      </div>
      {showLeaderBoard && <ModalImpl InnerComponent={Leaderboard} />}
    </>
  ) : (
    <InactiveController onChange={onChange} onClick={handleOnClick} />
  );
};

export const Controller = props => (
  <FirebaseComponent InnerComponent={BaseController} {...props} />
);
