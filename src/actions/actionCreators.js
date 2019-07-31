import {
  START_GAME,
  END_GAME,
  GENERATE_MINES,
  SET_CONFIG
} from './actionTypes'

export const startGame = isActive => ({
  type: START_GAME,
  isActive
})

export const endGame = isActive => ({
  type: END_GAME,
  isActive
})

export const generateMines = mines => ({
  type: GENERATE_MINES,
  mines
})

export const setConfig = config => ({
  type: SET_CONFIG,
  config
})