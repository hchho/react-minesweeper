import React, { useState } from 'react'

const SECOND_IN_MS = 1000 

const Timer = ({ endGame, timeLimit }) => {
  const [count, setCount] = useState(0)
  setTimeout(() => { setCount(count + SECOND_IN_MS) }, SECOND_IN_MS)
  if (count === timeLimit) endGame()
  return (
    <div>
      {count / SECOND_IN_MS}
    </div>
  )
}

export default Timer