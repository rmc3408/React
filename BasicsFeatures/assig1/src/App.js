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
    firstname: "John Doe",
    title: ""

  };

  checkButton = () => { 
    console.log("clicked");
  }

  clickUsername = (newFN) => { 
    this.setState({
      username: [
        newFN,
        "rmc3408@protonmail.com",
        "rmolina9@my.centennialcollege.ca"]

    });
  }
  clickFirstname = (newFN) => { 
    this.setState({
      firstname: newFN

    });
  }
  enterForm = (event) => {
    this.setState({
      title: event.target.value
    });

  }

  render() {

    const myStyle = {
      width: "70%",
      margin: "auto",
      backgroundColor: "lightBlue",
      border: "5px solid orange"

    };

    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assignment 01 </h1>
          <p>Basics (section 03) </p>
      </header>

      <section> 
          <div className="groupBox">
          <h3> Property Label direct connected via props in UserOutPut component</h3>
          <Useroutput username="molinaro.raphael@gmail.com"/>
          <Useroutput username="rmc3408@protonmail.com" />
          <Useroutput username="rmolina9@my.centennialcollege.ca" />
          </div>
          
          <div className="inputbox"> 
            <h3> UserInput dinamicly change title on UserOutPut component</h3>
          <Userinput currentname={this.state.firstname}/>
          <Userinput propertyToChange={this.enterForm} />
          <Userinput propertyToChange={this.enterForm} currentname={this.state.title}/>
          <Useroutput title={this.state.title}/>
          </div>

          <div className="groupBox">
          <h3> UserOutput get info from State array </h3>
          <Useroutput username={this.state.username[0]} />
          <Useroutput username={this.state.username[1]} />
          <Useroutput username={this.state.username[2]} />
          </div>

        <div style={myStyle}>
        <h3> Button print console log EVENT and inStyle</h3>
        <button onClick={this.checkButton}>Change to names </button>
        </div>       
          

        <div className="groupBox">
        <h3> UserOutput change onClick event in paragraph </h3>
        <Useroutput transferClick={this.clickUsername.bind(this, "Google Mail")}
            username={this.state.username[0]} firstname={this.state.firstname}/>
        <Useroutput transferClick={this.clickFirstname.bind(this, "GitHub")}
            username={this.state.username[1]} firstname={this.state.firstname} />
        </div>
          
      </section>
    </div>
    );
  }
}

export default App;
