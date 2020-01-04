import { SET_GAME_DIFFICULTY } from '../actions'

export const setGameDifficulty = (state, action) => {
  switch(action.type) {
    case SET_GAME_DIFFICULTY:
      return action.difficulty
    default:
      return state.gameDifficulty
  }
}