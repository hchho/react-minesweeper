import { generateMines } from './mines'

export const reducers = (state = {}, action) => {
  return {
    mineMap: generateMines(state.mines, action),
    // gameConfig: gameConfig(state.config, action)
    gameConfig: {
      config: {
        size: {
          columns: 10,
          rows: 10
        },
        mines: 15
      }
    }
  }
}