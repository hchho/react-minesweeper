import React, { useState } from 'react'

const Controller = ({ generateConfig, startGame }) => {
  const [level, setLevel] = useState('1')
  const onChange = (event) => {
    setLevel(event.target.value)
  }
  return (
  <form>
    <label for='level'>
      Difficulty level
      <select onChange={onChange}>
        <option value='1' defaultValue>Easy</option>
        <option value='2'>Medium</option>
        <option value='3'>Hard</option>
      </select>
    </label>
    <input 
      type='button' 
      value='Start' 
      onClick={() => {
        generateConfig(level)
        startGame()
      }} 
    />
  </form>
)}

export default Controller