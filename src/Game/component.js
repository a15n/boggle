import React, { Component } from 'react';
import Board from './Board/component';

export default class Game extends Component {
  constructor() {
    super(...arguments);
    this.onSquareClick = this.onSquareClick.bind(this);

    const dice = ['aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', 'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', 'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', 'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', 'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu'];

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
        row.push(squares.pop());
      }
      matrix.push(row);
    }

    this.state = {
      matrix,
      word: '',
    };
  }
  onSquareClick(squareParams) {
    const { letter } = squareParams;
    console.log(letter);
  }
  render() {
    const { matrix } = this.state;
    return (
      <Board matrix={matrix} onSquareClick={this.onSquareClick}/>
    )
  }
}
