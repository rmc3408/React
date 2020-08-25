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

    

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assigment 02</h1>
          
        </header>

        <div className='boxcontainer'>
        <input type='text' onChange={this.countInput}/>
        <ValidationComp txt={this.state.text} num={this.state.size} />
        </div>


      </div>
    );
  }
}

export default App;
