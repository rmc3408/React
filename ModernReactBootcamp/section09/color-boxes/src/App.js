import logo from './logo.svg';
import './App.css';
import ColorTable from './ColorTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Color Boxes</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <ColorTable />
      </div>
    </div>
  );
}

export default App;
