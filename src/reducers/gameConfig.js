import { SET_CONFIG } from '../actions'

export const gameConfig = (state = {}, action) => {
  switch(action.type) {
    case SET_CONFIG:
      return {
        ...state,
        config: {
          size: {
            columns: 10,
            rows: 10
          },
          mines: 15
        }
      }
    default:
      return state
  }
}