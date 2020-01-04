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

const HighScoreForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Your name"
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="button"
        value="Enter"
        onClick={() => handleSubmit(username)}
      />
    </form>
  );
};

const BaseController = ({
  endGame,
  firebase,
  gameDifficulty,
  gameDuration,
  gameStatus,
  generateConfigWithLevel,
  startGame
}) => {
  const [level, setLevel] = useState("1");
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [showHighscoreForm, setShowHighscoreForm] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onChange = event => {
    setLevel(event.target.value);
  };

  const handleOnClick = () => {
    generateConfigWithLevel(level);
    startGame();
  };

  const handleSubmit = username => {
    firebase.postScore(username, gameDuration, gameDifficulty).then(() => {
      setShowHighscoreForm(!showHighscoreForm);
      setHasSubmitted(true);
    });
  };

  const GameEndComponent = () => (
    <>
      <input
        type="button"
        value="Submit highscore"
        onClick={() => setShowHighscoreForm(!showHighscoreForm)}
      />
      <input
        type="button"
        value="Show leaderboard"
        onClick={() => setShowLeaderBoard(!showLeaderBoard)}
      />
      {!hasSubmitted && showHighscoreForm && (
        <HighScoreForm handleSubmit={handleSubmit} />
      )}
      {showLeaderBoard && (
        <ModalImpl
          handleClose={() => setShowLeaderBoard(!showLeaderBoard)}
          InnerComponent={Leaderboard}
          {...{ firebase }}
        />
      )}
    </>
  );

  return isGameActive(gameStatus) || isGameComplete(gameStatus) ? (
    <>
      <div className="controller__active-container">
        <Timer endGame={endGame} />
        <input type="button" value="Restart Game" onClick={endGame} />
        {isGameComplete(gameStatus) && <GameEndComponent />}
      </div>
    </>
  ) : (
    <InactiveController onChange={onChange} onClick={handleOnClick} />
  );
};

export const Controller = withFirebase(BaseController);
