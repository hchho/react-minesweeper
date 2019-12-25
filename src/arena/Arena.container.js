import Arena from "./Arena.component";
import { ACTIVE_PAUSED_GAME_STATUS, INACTIVE_GAME_STATUS } from "../utils";
import { clearSquares, createMineMap, setGameState } from "../redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    gameConfig: state.gameConfig,
    mines: state.mineMap,
    revealedSquares: state.revealedSquares
  };
};

const mapDispatchToProps = dispatch => ({
  pauseGame: () => dispatch(setGameState(ACTIVE_PAUSED_GAME_STATUS)),
  endGame: () => {
    dispatch(setGameState(INACTIVE_GAME_STATUS));
    dispatch(clearSquares());
  },
  generateMines: () => dispatch(createMineMap())
});

export default connect(mapStateToProps, mapDispatchToProps)(Arena);
