import React, { useEffect } from 'react'
import "./Leaderboard.scss"

export const Leaderboard = ({ firebase }) => {
  useEffect(() => {
    firebase.getAllScores().orderByChild("timeInMs").limitToFirst(10).once('value').then(snapshot => {
      snapshot.forEach(data => {
        console.log(data.val())
      })
    })
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
