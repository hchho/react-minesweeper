import { INACTIVE_GAME_STATUS } from '../utils'

export const initialState = {
  mineMap: [],
  gameConfig: {
    size: {
      rows: 0,
      columns: 0
    },
    mines: 0,
    timeLimit: 0
  },
  gameState: {
    status: INACTIVE_GAME_STATUS
  }
}
