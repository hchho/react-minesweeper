import { connect } from 'react-redux'
import { setGameState } from '../../actions'
import Square from '../component/Square'
import { INACTIVE_GAME_STATUS, ACTIVE_PAUSED_GAME_STATUS } from '../../utils'

const mapStateToProps = state => ({
  gameStatus: state.gameState.status
})

const mapDispatchToProps = dispatch => ({
  endGame: () => dispatch(setGameState(INACTIVE_GAME_STATUS)),
  pauseGame: () => dispatch(setGameState(ACTIVE_PAUSED_GAME_STATUS))
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)