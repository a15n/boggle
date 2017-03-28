import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
  constructor() {
    super(...arguments);
    this.renderWordsAndScores = this.renderWordsAndScores.bind(this);
  }
  getPoints(l) {
    if (l < 3) {
      return 0;
    } else if (l === 3) {
      return 1;
    } else if (l === 4) {
      return 2;
    } else if (l === 5) {
      return 3;
    } else if (l === 6) {
      return 4;
    } else if (l === 7) {
      return 5;
    } else {
      return 6;
    }
  }
  renderWordsAndScores(word, i) {
    return (
      <h3 key={i} className="ScoreBoard-wordRow">
        {word} <span className="ScoreBoard-wordScore">{this.getPoints(word.length)}</span>
      </h3>
    )
  }
  render() {
    const { words } = this.props;
    return (
      <div className="ScoreBoard">
        <div className="ScoreBoard-upper">
          <h3>HEADER</h3>
          {words.map(this.renderWordsAndScores)}
        </div>
        <div className="ScoreBoard-lower">
          <h3>TOTAL SCORE <span className="ScoreBoard-lowerScore">100</span></h3>
        </div>
      </div>
    )
  }
}

ScoreBoard.propTypes = {
  words: React.PropTypes.array.isRequired
}

export default ScoreBoard;
