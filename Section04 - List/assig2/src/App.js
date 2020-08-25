import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CharComp from './CharComp/CharComp';
import ValidationComp from './ValidationComp/ValidationComp';

class App extends Component {

  //pre-defined input
  state = {
    text: 'RAP',
    size: 3,
    charWord: ['R', 'A', 'P']
  };

  //Function to output the input.
  countInput = (event) => {
    this.setState({
      text: event.target.value,
      size: event.target.value.length
    });
  }

  separation = (event) => {
    //Split word in array
    let fullword = event.target.value;
    let wordArray = [];
    wordArray = fullword.split();

    //Save array in State
    let newCharState = [...this.state.charWord];
    newCharState = wordArray;
    this.setState(
      {charWord: newCharState}
    );
  };



  render() {

    let wordSeparate = null;
    if (this.state.charWord != null) {
      wordSeparate = (
        <div>
          {this.state.charWord.map((item) => {
            return <CharComp oneChar={item} />;
          })}
        </div>
      );
    }
  
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assigment 02</h1>
          
        </header>

        <div className='boxcontainer'>
          <input className="form" type='text'
            //onChange={this.countInput}
            onChange={this.separation} />
        <ValidationComp txt={this.state.text} num={this.state.size} />
        </div>

        <div className='boxcontainer'>
        <CharComp oneChar={wordSeparate} />
        </div>
</div>
    );
  }
}

export default App;
