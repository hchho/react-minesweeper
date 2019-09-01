import { initialState } from './initialState'
import { generateMines } from './mines'
import { setConfig } from './gameConfig'
import { setGameState } from './gameState'

export const reducers = (state = initialState, action) => {
  return {
    mineMap: generateMines(state, action),
    gameConfig: setConfig(state.gameConfig, action),
    gameState: setGameState(state, action)
  }
}