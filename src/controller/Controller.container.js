import { connect } from 'react-redux'
import { setConfig, setGameState } from '../redux'
import { ACTIVE_RUNNING_GAME_STATUS, INACTIVE_GAME_STATUS } from '../utils'
import Controller from './Controller.component'

const DEFAULT_DIMENSIONS = 10

const DEFAULT_MINES = 20

const DEFAULT_TIME_IN_MS = 120000

const mapStateToProps = state => ({
  gameStatus: state.gameState.status
})

const mapDispatchToProps = dispatch => ({
  generateConfig: level => {
    const parsedLevel = parseInt(level)
    const config = {
      size: {
        rows: DEFAULT_DIMENSIONS * parsedLevel,
        columns: DEFAULT_DIMENSIONS * parsedLevel
      },
      mines: DEFAULT_MINES * parsedLevel,
      timeLimit: DEFAULT_TIME_IN_MS * parsedLevel
    }
    dispatch(setConfig(config))
  },
  endGame: () => dispatch(setGameState(INACTIVE_GAME_STATUS)),
  startGame: () => dispatch(setGameState(ACTIVE_RUNNING_GAME_STATUS)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller)