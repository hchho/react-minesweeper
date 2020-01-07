import React, { useEffect, useState } from "react";
import "./Leaderboard.scss";

export const Leaderboard = ({ firebase }) => {
  const difficulties = ["Easy", "Medium", "Hard"];
  const [difficulty, setDifficulty] = useState(1);
  const [isFetching, setFetching] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    firebase
      .getScoresForDifficulty(difficulty)
      .orderByChild("timeInMs")
      .limitToFirst(10)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(data => {
          setLeaderboard(prevState => [...prevState, data.val()]);
        });
        setFetching(false);
      });
  }, [firebase, difficulty]);

  return isFetching ? (
    "Loading..."
  ) : (
    <div className="leaderboard__container">
      <h3>Leaderboard</h3>
      <div className="leaderboard__difficulty-container">
        <ul>
          {difficulties.map((diff, idx) => (
            <li
              onClick={() => {
                setDifficulty(idx + 1);
                setLeaderboard([]);
              }}
              className={`leaderboard__difficulty-list-item--${difficulty === idx + 1 ? 'active' : 'inactive'}`}
            >
              {diff}
            </li>
          ))}
        </ul>
      </div>
      <ol>
        {leaderboard.map(data => (
          <li key={data.timeInMs}>
            {data.name}: {data.timeInMs}
          </li>
        ))}
      </ol>
    </div>
  );
};
