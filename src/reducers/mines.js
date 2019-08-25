import { GENERATE_MINES } from '../actions'
import gameConfig from '../game-config'

const generateRandomLocation = max => {
  const x = Math.floor(Math.random() * Math.floor(max))
  const y = Math.floor(Math.random() * Math.floor(max))
  return {
    x,
    y
  }
}

const createMineMap = config => {
  const mineMap = []
  let randomLocation = ''
  while (mineMap.length < gameConfig.mines) {
    randomLocation = generateRandomLocation(config.size.rows)
    if (!mineMap.find(elem => elem.x === randomLocation.x && elem.y === randomLocation.y)) {
      mineMap.push(randomLocation)
    }
  }
  return mineMap
}

export const generateMines = (state = [], action) => {
  switch(action.type) {
    case GENERATE_MINES:
      return [
        ...state,
        ...createMineMap(gameConfig)
      ]
    default: 
      return state
  }
}