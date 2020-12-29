import React from 'react';
import logo from './logo.svg';
import './App.css';
import fruits from './foods';
import { choice, remove } from './helpers'; 


const theFruit = choice(fruits);
//console.log(theFruit);

const remain = remove(fruits, theFruit);
//console.log(remain);

const secondFruit = choice(remain);





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Section 04. Create React app and Fruit exercise
        </p>
      </header>
      <h1> I have 15 fruits</h1>
      <h1> i'd selected the first {theFruit}</h1>
      <h3> After one fruit removed, we have {remain.length} fruits left. </h3>
      <h3> {remain} </h3>
      
      <h1> i'd like to get a different fruit {choice(remain)}, no sorry, my mistake </h1>
      <h1> May I have another fruit? I pick {secondFruit}</h1>
      <h1> we have {remain.length - 1} fruits left. </h1>

    </div>
  );
}

export default App;
