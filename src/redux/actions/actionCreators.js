import {
  CLEAR_SQUARES,
  GENERATE_MINES,
  REVEAL_SQUARE,
  SET_CONFIG,
  SET_GAME_STATE,
} from './actionTypes'

export const clearSquares = () => ({
  type: CLEAR_SQUARES
})

export const generateMines = mines => ({
  type: GENERATE_MINES,
  mines
})

export const revealSquare = square => ({
  type: REVEAL_SQUARE,
  square
})

export const setConfig = config => ({
  type: SET_CONFIG,
  config
})

export const setGameState = status => ({
  type: SET_GAME_STATE,
  status
})