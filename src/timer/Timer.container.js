import { connect } from 'react-redux'
import Timer from './Timer.component'
import { setGameDuration } from '../redux'

const mapStateToProps = state => ({
  gameStatus: state.gameState.status,
  timeLimit: state.gameConfig.timeLimit
})

const mapDispatchToProps = dispatch => ({
  dispatchGameDuration: duration => dispatch(setGameDuration(duration))
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)