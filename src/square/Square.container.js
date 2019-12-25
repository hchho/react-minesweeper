import { connect } from 'react-redux'
import { setGameState, REVEAL_SQUARE } from '../redux'
import Square from './Square.component'
import { INACTIVE_GAME_STATUS, ACTIVE_PAUSED_GAME_STATUS } from '../utils'

const mapStateToProps = (state, ownProps) => ({
  gameStatus: state.gameState.status,
  isRevealed: state.revealedSquares.reduce((acc, val) => {
    return (val.x === ownProps.column && val.y === ownProps.row) ? [...acc, 1] : acc
  }, []).length > 0
})

const mapDispatchToProps = dispatch => ({
  endGame: () => dispatch(setGameState(INACTIVE_GAME_STATUS)),
  pauseGame: () => dispatch(setGameState(ACTIVE_PAUSED_GAME_STATUS)),
  revealSquare: (x, y) => dispatch({type: REVEAL_SQUARE, square: {x, y}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)