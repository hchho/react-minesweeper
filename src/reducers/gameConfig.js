import {
  SET_CONFIG
} from '../actions'

export const setConfig = (gameConfig, action) => {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...gameConfig,
        ...action.config
      }
      default:
        return gameConfig
  }
}