import React, { Component } from "react";
import Square from "./Square";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      grid: this.createBoard()
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  createBoard() {
    let grid = [];
    for (let i = 0; i < this.props.rows; i++) {
      let row = [];
      for (let j = 0; j < this.props.columns; j++) {
        let light = Math.random() > this.props.lightChance;
        row.push(light);
      }
      grid.push(row);
    }
    return grid;
  }

  flipCellsAround(coord) {
    let grid = this.state.grid;
    let { rows, columns } = this.props;
    function flipCell(x, y) {
      if (x >= 0 && x < columns && y >= 0 && y < rows) {
        grid[x][y] = !grid[x][y];
      }
    }
    let [x, y] = coord.split(" ").map(Number);
    flipCell(x, y);
    flipCell(x + 1, y);
    flipCell(x - 1, y);
    flipCell(x, y + 1);
    flipCell(x, y - 1);
    let hasWon = this.isGameWon(grid);
    this.setState({ grid: grid, hasWon: hasWon });
  }

  isGameWon(grid) {
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.columns; j++) {
        if (!grid[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  renderSquare(i, j) {
    let coord = i + " " + j;
    return (
      <Square
        key={coord}
        isLit={this.state.grid[i][j]}
        handleClick={() => this.flipCellsAround(coord)}
      />
    );
  }

  render() {
    let content;
    if (this.state.hasWon) {
      content = <h1>You win!</h1>;
    } else {
      const rowList = [];
      for (let i = 0; i < this.props.rows; i++) {
        const cellList = [];
        for (let j = 0; j < this.props.columns; j++) {
          cellList.push(this.renderSquare(i, j));
        }
        const row = <tr key={"row" + i}>{cellList}</tr>;
        rowList.push(row);
      }
      content = (
        <table className="Board">
          <tbody>{rowList}</tbody>
        </table>
      );
    }

    return content;
  }
}

export default Board;
