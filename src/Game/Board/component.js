import React, { Component } from 'react';
import './board.css';
import Square from './Square/component';

class Board extends Component {
  constructor() {
    super(...arguments);
    this.renderRow = this.renderRow.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
  }
  renderRow(row, i) {
    const rowKey = 'row' + i;
    return (
      <div className="Board-row" key={rowKey}>
        {row.map(this.renderSquare)}
      </div>
    )
  }
  renderSquare(square) {
    const { onSquareClick } = this.props;
    return (
      <Square
        key={square.key}
        letter={square.letter}
        onClick={onSquareClick}
      />
    )
  }
  render() {
    const { matrix } = this.props;
    return (
      <div>
        <h2>board</h2>
        {matrix.map(this.renderRow)}
      </div>
    )
  }
}

Board.propTypes = {
  matrix: React.PropTypes.array.isRequired,
  onSquareClick: React.PropTypes.func.isRequired,
}


export default Board;
