import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Valid from './Valid/Valid';

class App extends Component {
  
  countInput = (event) => {


  }
  
  render() {
    
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assigment 02</h1>
          <p> List and Conditionals</p>
        </header>
        
        <label for='Valid'> Enter text: </label>
        <Valid changed={this.countInput}/>


      </div>
    );
  }
}

export default App;
