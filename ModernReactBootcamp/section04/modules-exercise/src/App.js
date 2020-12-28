import React from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './foods';
import { choice, remove } from './helpers'; 

function App() {
  
  const fruit = choice(fruits);
  console.log(fruit);
  const remain = remove(fruits, fruit);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Section 04. Export and import modules
        </p>
      </header>
      <h1> i'd like one {fruit}, please </h1>
      <h5> i'd like one {choice(fruits)}, please </h5>
      <h1> May I have another fruit? </h1>
      <h1> we have {remain} fruits left. </h1>

    </div>
  );
}

export default App;
