import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nRows: number of rows of board
 * - nCols: number of cols of board
 * ---- chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - isWinner: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nRows: 3,
    nCols: 3,
    chanceLightStartsOn: 0.35

  };
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      isWinner: false,

    };
    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = Array.from({ length: this.props.nRows });
    board = board.map(() => {
      let secArray = Array.from({ length: this.props.nCols });
      secArray = secArray.map(()=> Math.random().toFixed(3) < this.props.chanceLightStartsOn);
      return secArray;
    });

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {nCols, nRows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    ////this.setState({board, isWinner});
  }


  /** Render game board or winning message. */

  render() {
    return (
      <div>
        <h1> Lights out</h1>
        <table className="Board">
          <tbody>
            {this.state.board.map((row, idxRow) => { 
              return <tr key={idxRow}>{row.map((val, idxCol) =>
                // <Cell key={idxCol} isLit={this.state.board[idxRow][idxCol]} />
                <Cell key={`${idxRow}-${idxCol}`} isLit={val} />
              )}</tr>
               })}
          </tbody>
        </table>

      </div>
    );
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;
