import {
  GENERATE_MINES,
  SET_CONFIG,
  SET_GAME_STATE,
  REVEAL_SQUARE
} from './actionTypes'

export const setGameState = status => ({
  type: SET_GAME_STATE,
  status
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