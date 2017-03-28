import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
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
  renderWordsAndScores(wordScore, i) {
    return (
      <h3 key={i} className="ScoreBoard-wordRow">
        {wordScore.word} <span className="ScoreBoard-wordScore">{wordScore.score}</span>
      </h3>
    )
  }
  render() {
    const { words } = this.props;
    const wordScores = words.map(word => {
      return {
        word: word,
        score: this.getPoints(word.length)
      }
    });
    const totalScore = [...wordScores].reduce((n, wordScore) => n + wordScore.score, 0);
    return (
      <div className="ScoreBoard">
        <div className="ScoreBoard-upper">
          <h3>HEADER</h3>
          {wordScores.map(this.renderWordsAndScores)}
        </div>
        <div className="ScoreBoard-lower">
          <h3>TOTAL SCORE <span className="ScoreBoard-lowerScore">{totalScore}</span></h3>
        </div>
      </div>
    )
  }
}

ScoreBoard.propTypes = {
  words: React.PropTypes.array.isRequired
}

export default ScoreBoard;
