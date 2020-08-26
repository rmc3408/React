import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CharComp from './CharComp/CharComp';
import ValidationComp from './ValidationComp/ValidationComp';

class App extends Component {

  //pre-defined input
  state = {
    text: 'RA',
    charWord: ['R', 'A']
  };

  //Function to output the input.
  countInput = (minievent) => {
    
    //Receive Input with new word
    let newTxt = minievent.target.value;

    //Create a array with Each lettler of Text
    let wArray = newTxt.split();
       
    //Update Dull Word and Array of letters
    this.setState({
      text: newTxt,
      charWord: wArray
    });
  }

  //Function to output the input.
  deleteChar = (index) => {
    console.log(index);
    let newtext = this.state.text;
    let ToCut = newtext.slice(index, index+1);
    let newCut = newtext.replace(ToCut, '');
    this.setState({text: newCut});

    //Create a array with Each lettler of Text
    //let wArray = newTxt.split('');
       
    //Update Dull Word and Array of letters
    //this.setState({
    //  text: newTxt,
    //  charWord: wArray
    //});
  }

  render() {
    
    //String does not MAP... convert string to array FIRST
    const name = this.state.text.split('');
    const newName = name.map.call(name, eachLetter => {
      return `${eachLetter}`
    });
    console.log(newName);


    let wordArray = [...this.state.text];
    const wordMap = wordArray.map((item, index) => {
      return <CharComp letter={item} key={index}
        toDel={() => { return this.deleteChar(index) }} />;
    });
      
    
  
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assigment 02</h1>
          
        </header>

        <div className='boxcontainer'>
          <input className="form" type='text'
            onChange={(event) => this.countInput(event)} />
          
          <ValidationComp txt={this.state.text} num={this.state.text.length} />
        </div>

        {/* CharComp Component Output list */}
        <div className='boxcontainer'>
          {wordMap}
        </div>
</div>
    );
  }
}

export default App;
