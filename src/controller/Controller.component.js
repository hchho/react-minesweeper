import React, { useState } from "react";
import { isGameActive, isGameComplete } from "../utils";
import { Timer } from "../timer";
import "./Controller.scss";
import { ModalImpl } from "../modal";
import { Leaderboard } from "../leaderboard";
import { withFirebase } from "../firebase";

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

const HighScoreForm = ({ firebase }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    firebase.postScore(username, 0);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Your name"
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <input type="button" value="Enter" onClick={handleSubmit} />
    </form>
  );
};

const BaseController = ({
  endGame,
  firebase,
  gameStatus,
  generateConfigWithLevel,
  startGame
}) => {
  const [level, setLevel] = useState("1");
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [showHighscoreForm, setShowHighscoreForm] = useState(false);

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
      onClick={() => setShowHighscoreForm(!showHighscoreForm)}
    />
  );

  return isGameActive(gameStatus) || isGameComplete(gameStatus) ? (
    <>
      <div className="controller__active-container">
        <Timer endGame={endGame} />
        <input type="button" value="Restart Game" onClick={endGame} />
        {isGameComplete(gameStatus) && <SubmitHighScoreBtn />}
      </div>
      {showHighscoreForm && <HighScoreForm firebase={firebase} />}
      {showLeaderBoard && (
        <ModalImpl InnerComponent={Leaderboard} {...{ firebase }} />
      )}
    </>
  ) : (
    <InactiveController onChange={onChange} onClick={handleOnClick} />
  );
};

export const Controller = withFirebase(BaseController);
