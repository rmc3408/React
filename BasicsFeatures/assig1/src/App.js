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
    firstname: "RMC",
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
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assignment 01 </h1>
          <p>Basics (section 03) </p>
      </header>

      <section> 
          <br />
          <h3> Property Label direct connected in UserOutPut component</h3>
          <Useroutput username="molinaro.raphael@gmail.com"/>
          <Useroutput username="rmc3408@protonmail.com" />
          <Useroutput username="rmolina9@my.centennialcollege.ca" />
          
          <hr />
          <h3> UserInput dinamicly change title on UserOutPut component</h3>
          <Userinput propertyToChange={this.enterForm}/>
          <Useroutput title={this.state.title}/>

          <hr />
          <h3> UserOutput get info from State array </h3>
          <Useroutput username={this.state.username[0]} />
          <Useroutput username={this.state.username[1]} />
          <Useroutput username={this.state.username[2]} />

          <hr />
          <h3> Button print console log EVENT </h3>
            <button onClick={this.checkButton}>Change to names </button>
          
          
          <hr />
          <h3> UserOutput change onClick event in paragraph </h3>

          <Useroutput transferClick={this.clickUsername.bind(this, "Google Mail")}
            username={this.state.username[0]} firstname={this.state.firstname}/>
          <Useroutput transferClick={this.clickFirstname.bind(this, "GitHub")}
            username={this.state.username[1]} firstname={this.state.firstname} />
         
      </section>
    </div>
    );
  }
}

export default App;
