import React, { useEffect, useState } from "react";
import "./Leaderboard.scss";

export const Leaderboard = ({ firebase }) => {
  const [isFetching, setFetching] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    firebase
      .getAllScores()
      .orderByChild("timeInMs")
      .limitToFirst(10)
      .once("value")
      .then(snapshot => {
        snapshot.forEach(data => {
          setLeaderboard(prevState => [...prevState, data.val()]);
        });
        setFetching(false)
      });
  }, [firebase]);

  return isFetching ? (
    "Loading..."
  ) : (
    <div className="leaderboard__container">
      <h3>Leaderboard</h3>
      <ol>
        {leaderboard.map(data => (
          <li key={data.timeInMs}>
            {data.user}: {data.timeInMs}
          </li>
        ))}
      </ol>
    </div>
  );
};
