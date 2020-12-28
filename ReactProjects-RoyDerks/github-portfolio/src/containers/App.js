import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Profile from './Profile';
import logo from '../logo.svg';

class App extends Component {
  render() {
    return (
      <div> 
        <Header image={logo} />
        <Profile />
      </div>
    );
  }
}

export default App;
