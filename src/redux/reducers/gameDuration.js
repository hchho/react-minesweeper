import { SET_GAME_DURATION } from '../actions'

export const setGameDuration = (state, action) => {
  switch(action.type) {
    case SET_GAME_DURATION:
      return action.duration
    default:
      return state.gameDuration
  }
}