import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> The Complete React Js and Redux Course - Build Modern Web Apps
         by Rayan Slim & Rob Percival </p>
        </header>
        <Title name={'Inside duties'} />
        <List tasks={['dust home', 'clean dishes']} />

        <Title name={'Outside duties'} />
        <List tasks={['dust car', 'clean garden']} />


      </div>
    );
  }
}
export default App;
