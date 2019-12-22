import { connect } from 'react-redux'
import { setGameState } from '../actions'
import Canvas from './Canvas.component'
import { ACTIVE_RUNNING_GAME_STATUS, INACTIVE_GAME_STATUS } from '../utils'

const mapStateToProps = state => ({
  gameStatus: state.gameState.status
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(setGameState(ACTIVE_RUNNING_GAME_STATUS)),
  endGame: () => dispatch(setGameState(INACTIVE_GAME_STATUS))
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
