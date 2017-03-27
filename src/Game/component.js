import React, { Component } from 'react';

export default class Game extends Component {
  constructor() {
    super(...arguments);

    const dice = ['aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', 'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', 'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', 'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', 'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu'];

    const letterObjects = dice.map((letters) => {
      return {
        letter: letters[Math.floor(Math.random() * letters.length)],
        isClicked: false,
        isClickable: true,
      };
    });

    const size = 5;
    const matrix = [];

    // TODO make this a util
    for (let y = 0; y < size; y++) {
      const row = [];
      for (let x = 0; x < size; x++) {
        row.push(letterObjects.pop());
      }
      matrix.push(row);
    }

    this.state = {
      matrix,
      word: '',
    };
  }
  render() {
    return <h1>H1</h1>
  }
}
