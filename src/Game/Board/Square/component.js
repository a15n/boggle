import React, { Component } from 'react';
import './square.css';

class Square extends Component {
  render() {
    const { letter } = this.props;
    return (
      <div className="Square">
        <button className="Square-button">{letter}</button>
      </div>

    )
  }
}

Square.propTypes = {
  letter: React.PropTypes.string.isRequired,
}

export default Square;
