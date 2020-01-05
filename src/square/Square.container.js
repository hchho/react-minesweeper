import { connect } from "react-redux";
import { revealSquare, setGameState } from "../redux";
import Square from "./Square.component";
import { ACTIVE_PAUSED_GAME_STATUS } from "../utils";

const mapStateToProps = (state, ownProps) => ({
  gameStatus: state.gameState.status,
  isRevealed: !!state.revealedSquares.find(
    val => val.x === ownProps.column && val.y === ownProps.row
  ),
  boardSize: state.gameConfig.size.rows
});

const mapDispatchToProps = dispatch => ({
  pauseGame: () => dispatch(setGameState(ACTIVE_PAUSED_GAME_STATUS)),
  revealSquare: (x, y) => dispatch(revealSquare({ x, y }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
