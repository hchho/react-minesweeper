import Arena from './Arena.component'
import { GENERATE_MINES } from '../redux'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    gameConfig: state.gameConfig,
    mines: state.mineMap,
    revealedSquares: state.revealedSquares
}}

const mapDispatchToProps = dispatch => ({
  generateMines: () => dispatch({ type: GENERATE_MINES }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Arena)