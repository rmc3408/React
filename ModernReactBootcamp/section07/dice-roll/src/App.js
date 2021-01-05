import logo from './logo.svg';
import './App.css';
import RollDice from './RollDice';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faDice } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faDice);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Rolling dice Game </h1>
      </header>
      <div>
        <RollDice />
      </div>
    </div>
  );
}

export default App;
