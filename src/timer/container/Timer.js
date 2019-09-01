import { connect } from 'react-redux'
import Timer from '../component/Timer'

const mapStateToProps = state => ({
  timeLimit: state.gameConfig.timeLimit
})

export default connect(mapStateToProps)(Timer)