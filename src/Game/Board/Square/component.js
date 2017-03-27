import React, { Component } from 'react';
import './square.css';

class Square extends Component {
  render() {
    const { letter, onClick } = this.props;
    return (
      <div className="Square">
        <button
          className="Square-button"
          onClick={() => onClick({letter})}
        >
          {letter}
        </button>
      </div>
    )
  }
}

Square.propTypes = {
  letter: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default Square;
