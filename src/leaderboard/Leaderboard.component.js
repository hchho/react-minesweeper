import React, { useEffect } from 'react'
import "./Leaderboard.scss"

export const Leaderboard = ({ firebase }) => {
  useEffect(() => {
    console.log(firebase.scores()) 
  }, [firebase])
  return (
  <div className="leaderboard__container">
    <h3>Leaderboard</h3>
    <p>asdf</p>
    <p>asdf</p>
    <p>asdf</p>
    <p>asdf</p>
    <p>asdf</p>
    <p>asdf</p>
    <p>asdf</p>
    <p>asdf</p>
  </div>
)}
