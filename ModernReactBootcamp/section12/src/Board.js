import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nRows: 3,
    nCols: 3,
    chanceLightStartsOn: 0.35,
  };

  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      isWinner: false,
    };
    this.flipCellsAroundMe = this.flipCellsAroundMe.bind(this);
  }

  createBoard() {
    let board = Array.from({ length: this.props.nRows });
    board = board.map(() => {
      let secArray = Array.from({ length: this.props.nCols });
      secArray = secArray.map(
        () => Math.random().toFixed(3) < this.props.chanceLightStartsOn
      );
      return secArray;
    });
    return board;
  }


  flipCellsAroundMe(coord) {
    let { nCols, nRows } = this.props;
    let board = this.state.board;
    let [r, c] = coord.split("-").map(Number);
    //console.log('flipping on Board');
    //console.log(`row = ${r}, col = ${c} and coord = ${coord}`);

    function flipCell(r, c) {
      //console.log(board[r][c]);
      if (c >= 0 && c < nCols && r >= 0 && r < nRows) {
        board[r][c] = !board[r][c];
        //console.log(board[r][c]);
      }
    }

    flipCell(r, c);
    flipCell(r - 1, c);
    flipCell(r + 1, c);
    flipCell(r, c - 1);
    flipCell(r, c + 1);
    

    //let test = [false,false,true].every(p => p === false)
    //console.log(test);
    let colsWon = board.map(col => {
       return col.every(c => c === false);
    });
    let won = colsWon.every(row => row === true);
    console.log(won);

    this.setState({
      board: board,
      isWinner: won,
    });
  }

  /** Render game board or winning message. */

  render() {
    return (
      <div>
        <h1> Lights out</h1>
        <table className="Board">
          <tbody>
            {this.state.board.map((row, idxRow) => {
              return (
                <tr key={idxRow}>
                  {row.map((val, idxCol) => (
                    // <Cell key={idxCol} isLit={this.state.board[idxRow][idxCol]} />
                    <Cell
                      key={`${idxRow}-${idxCol}`}
                      isLit={val}
                      flipCells={() =>
                        this.flipCellsAroundMe(`${idxRow}-${idxCol}`)
                      }
                    />
                  ))}
                </tr>
              );
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
