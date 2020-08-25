import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ValidationComp from './ValidationComp/ValidationComp';

class App extends Component {

  //pre-defined input
  state = {
    text: null,
    size: null
  };

  //Function to output the input.
  countInput = (event) => {
    this.setState({
      text: event.target.value,
      size: event.target.value.length
    });
  }



  render() {

    let textVariable = null;
    if (this.state.size > 5) {
      textVariable = (
        <div>  <p> Nice text </p>  </div>);
    } else {
      textVariable = (
        <div>  <p> Still small text </p>  </div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assigment 02</h1>
          <p> List and Conditionals</p>
        </header>

        
        <input type='text' onChange={this.countInput}/>
        <h6> {this.state.text}  = word size is {this.state.size}</h6>
        
        <ValidationComp txt={this.state.text} num={this.state.size} />
        {textVariable}


      </div>
    );
  }
}

export default App;
