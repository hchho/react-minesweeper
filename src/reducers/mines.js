import { GENERATE_MINES } from '../actions'
import gameConfig from '../game-config'

const generateRandomLocation = max => {
  const x = Math.floor(Math.random() * Math.floor(max))
  const y = Math.floor(Math.random() * Math.floor(max))
  return `R${x}C${y}`
}

const createMineMap = config => {
  const mineMap = {}
  let randomLocation = ''
  while (Object.keys(mineMap).length < config.mines) {
    randomLocation = generateRandomLocation(config.size.rows)
    if (!mineMap[randomLocation]) {
      mineMap[randomLocation] = randomLocation
    }
  }
  return mineMap
}

export const generateMines = (state = {}, action) => {
  switch(action.type) {
    case GENERATE_MINES:
      return {
        ...state,
        mines: createMineMap(gameConfig)
      }
    default: 
      return state
  }
}