import {
  CLEAR_SQUARES,
  GENERATE_MINES,
  REVEAL_SQUARE,
  SET_GAME_DIFFICULTY,
  SET_GAME_DURATION,
  SET_GAME_STATE,
  SET_LEVEL
} from "./actionTypes";

export const clearSquares = () => ({
  type: CLEAR_SQUARES
});

export const createMineMap = () => ({
  type: GENERATE_MINES
});

export const revealSquare = square => ({
  type: REVEAL_SQUARE,
  square
});

export const setConfig = level => ({
  type: SET_LEVEL,
  level
});

export const setGameDifficulty = difficulty => ({
  type: SET_GAME_DIFFICULTY,
  difficulty
});

export const setGameDuration = duration => ({
  type: SET_GAME_DURATION,
  duration
});

export const setGameState = status => ({
  type: SET_GAME_STATE,
  status
});
