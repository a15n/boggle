import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  constructor() {
    super(...arguments);

    this.renderRow = this.renderRow.bind(this);
  }
  renderSquare(square) {
    return <div key={square.key}>{square.letter}</div>
  }
  renderRow(row, i) {
    i = 'row' + i;
    return (
      <div className="Board-row" key={i}>
        {row.map(this.renderSquare)}
      </div>
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
}


export default Board;
