import Arena from '../component/Arena'
import { GENERATE_MINES } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  const createSquares = (rows, columns) => [...new Array(rows)].map((row, rowIndex) => [...new Array(columns)].map((column, columnIndex) => `R${rowIndex}C${columnIndex}`))
  return {
    createSquares,
    gameConfig: state.gameConfig,
    mines: state.mineMap
}}

const mapDispatchToProps = dispatch => ({
  generateMines: () => dispatch({ type: GENERATE_MINES })
})

export default connect(mapStateToProps, mapDispatchToProps)(Arena)