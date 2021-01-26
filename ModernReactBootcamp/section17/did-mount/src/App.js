import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer";
import ZenPhrase from './ZenPhrase';
import GitHub from "./GitHub";

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
        <GitHub />
      </div>
    </div>
  );
}

export default App;
