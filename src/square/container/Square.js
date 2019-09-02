import { connect } from 'react-redux'
import { setGameState } from '../../actions'
import Square from '../component/Square'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  endGame: () => dispatch(setGameState(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)