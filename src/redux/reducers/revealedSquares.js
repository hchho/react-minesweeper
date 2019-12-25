import { REVEAL_SQUARE, CLEAR_SQUARES } from "../actions";

export const setRevealedSquares = (state, action) => {
  switch (action.type) {
    case REVEAL_SQUARE:
      return state.revealedSquares.some(val => val.x === action.square.x && val.y === action.square.y) ? state.revealedSquares : [...state.revealedSquares, action.square]
    case CLEAR_SQUARES:
      return [];
    default:
      return state.revealedSquares;
  }
};
