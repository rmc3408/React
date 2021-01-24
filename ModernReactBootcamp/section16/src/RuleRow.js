import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {  
  render() {
    const { score, description, doScore, name } = this.props;
    const isUsed = score !== undefined;
      
    return (
      <tr className={`RuleRow RuleRow-${isUsed ? 'disabled' : 'active'}`}
        onClick={(isUsed ? null : doScore)}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{isUsed ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;
