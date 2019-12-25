import { REVEAL_SQUARE, CLEAR_SQUARES } from "../actions";

export const setRevealedSquares = (state, action) => {
  switch (action.type) {
    case REVEAL_SQUARE:
      return [...state.revealedSquares, action.square];
    case CLEAR_SQUARES:
      return [];
    default:
      return state.revealedSquares;
  }
};
