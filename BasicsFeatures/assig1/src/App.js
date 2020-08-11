import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Userinput from './UserInput/UserInput';
import Useroutput from './UserOutput/UserOutput';


class App extends Component {
  
  state = {
    username: [
      "molinaro.raphael@gmail.com",
      "rmc3408@protonmail.com",
      "rmolina9@my.centennialcollege.ca"],
    firstname: "Centennial"

  };

  checkButton = () => { 
    console.log("clicked");
  }

  clickToState = (newFN) => { 
    this.setState({
      username: [
        newFN,
        "rmc3408@protonmail.com",
        "rmolina9@my.centennialcollege.ca"]

    });
  }


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
          <Useroutput username="rmc3408@protonmail.com" />
          <Useroutput username="rmolina9@my.centennialcollege.ca" />
          
          <Userinput /><Userinput />

          <Useroutput username={this.state.username[0]} />
          <Useroutput username={this.state.username[1]} />
          <Useroutput username={this.state.username[2]} />

          <Userinput /><Userinput />
          
          <button onClick={this.checkButton}>Change to names </button>

          <Useroutput transferClick={this.clickToState.bind(this, "Google Mail")}
            username={this.state.username[0]} />
          <Useroutput username={this.state.username[1]} />
          <Useroutput username={this.state.username[2]} />

          <Userinput />
          
      </section>
    </div>
    );
  }
}

export default App;
