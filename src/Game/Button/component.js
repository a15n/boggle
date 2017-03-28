import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <button className="Button" onClick={onClick}>
        <h2>{text}</h2>
      </button>
    )
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default Button;
