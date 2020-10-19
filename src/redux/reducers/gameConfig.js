import {
  SET_LEVEL
} from '../actions'

const DEFAULT_DIMENSIONS = 10

const DEFAULT_MINES = 10

const DEFAULT_TIME_IN_MS = 120000

export const setConfig = (gameConfig, action) => {
  switch (action.type) {
    case SET_LEVEL:
      const level = action.level
      const config = {
        size: {
          rows: DEFAULT_DIMENSIONS * level,
          columns: DEFAULT_DIMENSIONS * level
        },
        mines: DEFAULT_DIMENSIONS * level * DEFAULT_DIMENSIONS * level / DEFAULT_MINES,
        timeLimit: DEFAULT_TIME_IN_MS * level
      }
      return {
        ...config
      }
    default:
      return gameConfig
  }
}
