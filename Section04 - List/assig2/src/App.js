import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CharComp from './CharComp/CharComp';
import ValidationComp from './ValidationComp/ValidationComp';

class App extends Component {

  //pre-defined input
  state = {
    text: 'RA',
    charWord: [ 'R', 'A']
  };

  //Function to output the input.
  countInput = (minievent) => {
    
    //Receive Input with new word
    let newTxt = minievent.target.value;

    //Create a array with Each lettler of Text
    let wordArray = newTxt.split();
       
    //Update Dull Word and Array of letters
    this.setState({
      text: newTxt,
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
              />

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
            onchange={(event) => this.countInput(event)} />
          

        <ValidationComp txt={this.state.text} num={this.state.text.length} />
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
