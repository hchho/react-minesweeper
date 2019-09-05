import { connect } from 'react-redux'
import Timer from '../component/Timer'

const mapStateToProps = state => ({
  gameStatus: state.gameState.status,
  timeLimit: state.gameConfig.timeLimit
})

export default connect(mapStateToProps)(Timer)