import { connect } from "react-redux";
import {
  clearSquares,
  setConfig,
  setGameDifficulty,
  setGameState
} from "../redux";
import { ACTIVE_RUNNING_GAME_STATUS, INACTIVE_GAME_STATUS } from "../utils";
import { Controller } from "./Controller.component";

const mapStateToProps = state => ({
  gameStatus: state.gameState.status,
  gameDifficulty: state.gameDifficulty,
  gameDuration: state.gameDuration
});

const mapDispatchToProps = dispatch => ({
  generateConfigWithLevel: level => {
    const parsedLevel = parseInt(level);
    dispatch(setGameDifficulty(level));
    dispatch(setConfig(parsedLevel));
  },
  endGame: () => {
    dispatch(setGameState(INACTIVE_GAME_STATUS));
    dispatch(clearSquares());
  },
  startGame: () => dispatch(setGameState(ACTIVE_RUNNING_GAME_STATUS))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
