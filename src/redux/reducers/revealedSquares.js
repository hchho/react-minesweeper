import { REVEAL_SQUARE, CLEAR_SQUARES } from "../actions";

export const setRevealedSquares = (state, action) => {
  switch (action.type) {
    case REVEAL_SQUARE:
      // return state.revealedSquares.some(({ x, y }) => x === action.square.x && y === action.square.y) ? state.revealedSquares : [...state.revealedSquares, action.square]
      const { x, y } = action.square;
      return state.revealedSquares.has(`X${x}Y${y}`) ? state.revealedSquares : state.revealedSquares.add(`X${x}Y${y}`);
    case CLEAR_SQUARES:
      return new Set();
    default:
      return state.revealedSquares;
  }
};
