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
    charWord: [
      { code: 'R' },
      { code: 'A' },
      { code: 'P' }
    ]
  };

  //Function to output the input.
  countInput = (event) => {
    
    //save the event in Array
    let fullword = event.target.value;
    let wordArray = [];
    wordArray = fullword.split();        
    
    //Update Array of Persons
    let charArray = [...this.state.charWord];
    charArray = wordArray;

    this.setState({
      text: event.target.value,
      size: event.target.value.length,
      charWord: charArray
    });
  }

  render() {

    //EVERY CHANGE will RENDER AGAIN
    let wordMap = null;
    if (this.state.charWord !== null) {
      wordMap = (
        <div>
          {this.state.charWord.map(item => {
            return <CharComp letter={item.code} />

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
            onChange={this.countInput} />
        <ValidationComp txt={this.state.text} num={this.state.size} />
        </div>

        <div className='boxcontainer'>

{/* CharComp Component Output list */}
          {wordMap}
        </div>
</div>
    );
  }
}

export default App;
