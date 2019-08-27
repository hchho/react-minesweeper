import { connect } from 'react-redux'
import { SET_CONFIG } from '../../actions'
import Controller from '../component/Controller'

const DEFAULT_DIMENSIONS = 10

const DEFAULT_MINES = 20

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  generateConfig: level => {
    const parsedLevel = parseInt(level)
    dispatch({ 
      type: SET_CONFIG, 
      config: {
        size: {
          rows: DEFAULT_DIMENSIONS * parsedLevel,
          columns: DEFAULT_DIMENSIONS * parsedLevel
        },
        mines: DEFAULT_MINES * parsedLevel
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller)