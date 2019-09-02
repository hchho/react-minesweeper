import { connect } from 'react-redux'
import { setGameState } from '../../actions'
import Canvas from '../component/Canvas'

const mapStateToProps = state => ({
  isGameActive: state.gameState.isActive
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(setGameState(true)),
  endGame: () => dispatch(setGameState(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
