import { initialState } from './initialState'
import { generateMines } from './mines'
import { setConfig } from './gameConfig'
import { setGameState } from './gameState'
import { setRevealedSquares } from './revealedSquares'
import { setGameDuration } from './gameDuration'
import { setGameDifficulty } from './gameDifficulty'

export const reducers = (state = initialState, action) => {
  return {
    revealedSquares: setRevealedSquares(state, action),
    mineMap: generateMines(state, action),
    gameConfig: setConfig(state.gameConfig, action),
    gameState: setGameState(state, action),
    gameDifficulty: setGameDifficulty(state, action),
    gameDuration: setGameDuration(state, action)
  }
}