import { connect } from "react-redux";
import { clearSquares, setConfig, setGameState } from "../redux";
import { ACTIVE_RUNNING_GAME_STATUS, INACTIVE_GAME_STATUS } from "../utils";
import { Controller } from "./Controller.component";

const mapStateToProps = state => ({
  gameStatus: state.gameState.status
});

const mapDispatchToProps = dispatch => ({
  generateConfigWithLevel: level => {
    const parsedLevel = parseInt(level);
    dispatch(setConfig(parsedLevel));
  },
  endGame: () => {
    dispatch(setGameState(INACTIVE_GAME_STATUS));
    dispatch(clearSquares());
  },
  startGame: () => dispatch(setGameState(ACTIVE_RUNNING_GAME_STATUS))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
