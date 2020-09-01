import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro/Intro';

const detail = {
  name: "raphael",
  age: 39,
  isEmployee: true
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
      age: 45

    };
  }
  componentDidMount() {
    console.log('App component was loaded!');
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Notepad Application </h2>
          <p> Building a React App from Scratch - by Emmanuel Henri - O'Reilly</p>
        </header>
        <p> Variable using Objects outside Class = {detail.name} </p>
        <Intro user={detail} />

        <p> Variable using State, object of the App Class = {this.state.name } </p>
        <Intro user={this.state} />
      </div>
    );
  }
}

export default App;
