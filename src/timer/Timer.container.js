import { connect } from 'react-redux'
import Timer from './Timer.component'

const mapStateToProps = state => ({
  gameStatus: state.gameState.status,
  timeLimit: state.gameConfig.timeLimit
})

export default connect(mapStateToProps)(Timer)