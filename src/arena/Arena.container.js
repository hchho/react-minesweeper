import Arena from './Arena.component'
import { GENERATE_MINES } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    gameConfig: state.gameConfig,
    mines: state.mineMap
}}

const mapDispatchToProps = dispatch => ({
  generateMines: () => dispatch({ type: GENERATE_MINES })
})

export default connect(mapStateToProps, mapDispatchToProps)(Arena)