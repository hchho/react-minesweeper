import { SET_GAME_STATE } from '../actions'

export const setGameState = (state, action) => {
  switch(action.type) {
    case SET_GAME_STATE:
      return {
        ...state.gameState,
        status: action.status
      }
    default:
      return state.gameState
  }
}