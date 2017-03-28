import React, { Component } from 'react';
import './Game.css';
import Board from './Board/component';
import ScoreBoard from './ScoreBoard/component';

export default class Game extends Component {
  constructor() {
    super(...arguments);
    this.onSquareClick = this.onSquareClick.bind(this);
    this.submitWord = this.submitWord.bind(this);

    const dice = ['aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', 'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', 'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', 'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', 'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu'];

    // TODO this dice.map is redundant. just pop/unshift the element during the x/y loops
    const squares = dice.map((letters, i) => {
      return {
        letter: letters[Math.floor(Math.random() * letters.length)],
        isClicked: false,
        isClickable: true,
        key: i,
      };
    });

    const size = 5;
    const matrix = [];

    // TODO make this a util
    for (let y = 0; y < size; y++) {
      const row = [];
      for (let x = 0; x < size; x++) {
        const square = squares.pop();
        square.index = `${x},${y}`;
        row.push(square);
      }
      matrix.push(row);
    }

    this.state = {
      matrix,
      word: '',
      words: [],
    };
  }
  onSquareClick(squareParams) {
    const { matrix, word } = this.state;
    const { index, letter } = squareParams
    const matrixCopy = [...matrix];

    // switch each square isClickable to false
    matrixCopy.forEach(arr => arr.forEach(s => s.isClickable = false));

    const [x, y] = index.split(',').map(n => Number(n));
    const clickedSquare = matrixCopy[y][x]; // 2d array stored as matrix[rowIndex][columnIndex]
    clickedSquare.isClicked = true;
    clickedSquare.isClickable = true; // TODO make last clicked button reversable (state - 1)

    function toggleAdjacentSquares(x, y, matrix) {
      const neighboringPositions = [
        [x, y - 1],     // top
        [x + 1, y - 1], // top right
        [x + 1, y],     // right
        [x + 1, y + 1], // bottom right
        [x, y + 1],     // bottom
        [x - 1, y + 1], // bottom left
        [x - 1, y],     // left
        [x - 1, y - 1], // top left
      ];

      neighboringPositions.forEach(positions => {
        const [x, y] = positions;
        if (matrix[y] && matrix[y][x]) {
          const square = matrix[y][x];
          square.isClickable = !square.isClicked;
        }
      })
    }

    // iterate through the adjacent squares and set isClickable to !.isClicked
    toggleAdjacentSquares(x, y, matrixCopy);

    this.setState({
      matrix: matrixCopy,
      word: word + letter,
    })
  }
  submitWord() {
    const wordsCopy = [...this.state.words];
    const matrixCopy = [...this.state.matrix];

    wordsCopy.push(this.state.word);

    matrixCopy.forEach(arr => arr.forEach(s => {
      s.isClickable = true;
      s.isClicked = false;
    }));

    this.setState({
      matrix: matrixCopy,
      words: wordsCopy,
      word: '',
    })
  }
  render() {
    const { matrix, word, words } = this.state;
    return (
      <div className="Game">
        <div className="leftPane">
          <Board matrix={matrix} onSquareClick={this.onSquareClick}/>
          <h3>CURRENT WORD</h3>
          <h2 className="Game-word">{word}</h2>
          <button onClick={this.submitWord}>SUBMIT WORD</button>
        </div>
        <div className="rightPane">
          <ScoreBoard words={words}/>
        </div>
      </div>
    )
  }
}
