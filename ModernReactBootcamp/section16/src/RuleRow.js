import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, description } = this.props;
    const isUsed = score !== undefined;
    return (
      <tr className={`RuleRow RuleRow-${isUsed ? 'disabled' : 'active'}`}
        onClick={isUsed ? null : this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{isUsed ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;