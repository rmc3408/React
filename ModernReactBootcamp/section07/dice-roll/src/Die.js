import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Die extends Component {
  render() {
    return (
        <div>
        <FontAwesomeIcon
          icon={`dice-${this.props.dice}`}
          color={this.props.colour}
          size={this.props.size}
          className={this.props.rolling ? 'Die-rolling' : ''}
        />
        </div>
    );
  }
}
export default Die;
