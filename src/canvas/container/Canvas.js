import { connect } from 'react-redux'
import { SET_GAME_STATE } from '../../actions'
import Canvas from '../component/Canvas'

const mapStateToProps = state => ({
  isGameActive: state.gameState.isActive
})

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({ type: SET_GAME_STATE, isActive: true}),
  endGame: () => dispatch({ type: SET_GAME_STATE, isActive: false})
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
