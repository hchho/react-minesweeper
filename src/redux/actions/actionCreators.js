import {
  GENERATE_MINES,
  SET_CONFIG,
  SET_GAME_STATE
} from './actionTypes'

export const setGameState = status => ({
  type: SET_GAME_STATE,
  status
})

export const generateMines = mines => ({
  type: GENERATE_MINES,
  mines
})

export const setConfig = config => ({
  type: SET_CONFIG,
  config
})