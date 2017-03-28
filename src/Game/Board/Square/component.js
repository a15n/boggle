import React, { Component } from 'react';
import classNames from 'classnames';
import './square.css';

class Square extends Component {
  render() {
    const { letter, index, isClickable, isClicked, onClick } = this.props;
    const buttonClasses = classNames(
      'Square-button',
      {'is-clickable': isClickable},
      {'is-clicked': isClicked},
    );
    return (
      <div className="Square">
        <button
          className={buttonClasses}
          id={index}
          onClick={() => onClick({letter, index})}
        >
          {letter}
        </button>
      </div>
    )
  }
}

Square.propTypes = {
  letter: React.PropTypes.string.isRequired,
  index: React.PropTypes.string.isRequired,
  isClickable: React.PropTypes.bool.isRequired,
  isClicked: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default Square;
