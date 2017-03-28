import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
  renderWordsAndScores(word, i) {
    return (
      <div key={i}>
        {word}
        <span className="ScoreBoard-wordScore">10</span>
      </div>
    )
  }
  render() {
    const { words } = this.props;
    return (
      <div>
        <div>HEADER</div>
        {words.map(this.renderWordsAndScores)}
      </div>
    )
  }
}

ScoreBoard.propTypes = {
  words: React.PropTypes.array.isRequired
}

export default ScoreBoard;
