import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Profile from './Profile';
import logo from '../logoWhite.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;



class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
        <div > 
          <Header image={logo} />
          <Profile />
        </div>
      
      </>
    );
  }
}

export default App;
