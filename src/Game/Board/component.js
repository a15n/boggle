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
    return (
      <div className="Board-row" key={i}>
        {row.map(this.renderSquare)}
      </div>
    )
  }
  renderSquare(square) {
    const { onSquareClick } = this.props;
    return (
      <Square
        key={square.index}
        letter={square.letter}
        index={square.index}
        isClickable={square.isClickable}
        isClicked={square.isClicked}
        onClick={onSquareClick}
      />
    )
  }
  render() {
    const { matrix } = this.props;
    return (
      <div>
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
