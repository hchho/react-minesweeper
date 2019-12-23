import { connect } from 'react-redux'
import Canvas from './Canvas.component'

const mapStateToProps = state => ({
  gameStatus: state.gameState.status
})

export default connect(mapStateToProps)(Canvas)
