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
      { id: 1, code: 'R' },
      { id: 2, code: 'A' },
      { id: 3, code: 'P' }
    ]
  };

  //Function to output the input.
  countInput = (minievent, index) => {
    
    //Find same lettler by index argument.
    const positionLetter = this.state.charWord.findIndex(
      l => { return l.id == index}
    );
    
    //Create new Object
    const SpecificCharWord = { ...this.state.charWord[positionLetter] };
    SpecificCharWord.code = minievent.target.value;

    //save the event in Array
    let wordArray = [...this.state.charWord];
    wordArray[positionLetter] = SpecificCharWord;        
    
    //Update Array of Persons
    
    this.setState({
      charWord: wordArray
    });
  }

  render() {

    //EVERY CHANGE will RENDER AGAIN
    let wordMap = null;
    if (this.state.charWord !== null) {
      wordMap = (
        <div>
          {this.state.charWord.map((item, index) => {
            return <CharComp letter={item.code}
              key={index}
              onchange={(event) => this.countInput(event, item.id)}/>

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
            onChange={this.countInput.bind(this)} />
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
