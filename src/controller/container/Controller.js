import { connect } from 'react-redux'
import { setConfig } from '../../actions'
import Controller from '../component/Controller'

const DEFAULT_DIMENSIONS = 10

const DEFAULT_MINES = 20

const DEFAULT_TIME_IN_MS = 120000

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  generateConfig: level => {
    const parsedLevel = parseInt(level)
    const config = {
      size: {
        rows: DEFAULT_DIMENSIONS * parsedLevel,
        columns: DEFAULT_DIMENSIONS * parsedLevel
      },
      mines: DEFAULT_MINES * parsedLevel,
      timeLimit: DEFAULT_TIME_IN_MS * parsedLevel
    }
    dispatch(setConfig(config))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller)