import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assignment 01 </h1>
        </header>
        <p className="App-intro">
          From Udemy React - Basics (section 03), edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div>
          <h1 className="App-title"> Assignment 01</h1>
        <UserInput />
        <UserOutput />

        </div>
        

      </div>
    );
  }
}

export default App;
