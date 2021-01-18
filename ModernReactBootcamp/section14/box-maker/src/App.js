import logo from './logo.svg';
import './App.css';
import BoxList from './components/BoxList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Box Maker </p>
      </header>
      <div> 
        <BoxList />
      </div>
    </div>
  );
}

export default App;
