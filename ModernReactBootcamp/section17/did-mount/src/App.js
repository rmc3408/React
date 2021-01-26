import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer";
import ZenPhrase from './ZenPhrase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Life Cycles</p>
      </header>
      <div>
        <Timer />
        <ZenPhrase />
      </div>
    </div>
  );
}

export default App;
