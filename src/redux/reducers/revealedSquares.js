import { REVEAL_SQUARE } from '../actions'

export const setRevealedSquares = (state, action) => {
  switch(action.type) {
    case REVEAL_SQUARE:
      return [
        ...state.revealedSquares,
        action.square
      ]
    default:
      return state.revealedSquares
  }
}