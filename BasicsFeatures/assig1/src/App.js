import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Userinput from './UserInput/UserInput';
import Useroutput from './UserOutput/UserOutput';


class App extends Component {
  
  state = {
    username: "rmc3408@protonmail.com"
  };

  render() {
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assignment 01 </h1>
          <p>Basics (section 03) </p>
      </header>

      <section> 

          <Useroutput username="molinaro.raphael@gmail.com"/>
          <Userinput />

          <Useroutput username="rmc3408@protonmail.com" />
          <Userinput />

          <Useroutput username="rmolina9@my.centennialcollege.ca" />
          <Userinput />
          
      </section>
    </div>
    );
  }
}

export default App;
