import React, { Component } from "react";
import drink from './drink.png';
import { Link } from 'react-router-dom';

class Pop extends Component {
  render() {
    return (
      <div className="Pop">
        <div className="Pop-container">
          <div className="Pop-Block"><img src={drink} alt='pop' className='Pop-spin'/></div>
          <div className="Pop-Block">
            <h1> The pop is {this.props.name} </h1>
            <Link to='/' >Go back</Link>
          </div>
          <div className="Pop-Block"><img src={drink} alt='pop' className='Pop-spin'/></div>
        </div>
      </div>
    );
  }
}

export default Pop;
