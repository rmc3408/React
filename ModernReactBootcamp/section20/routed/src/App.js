import logo from './logo.svg';
import './App.css';
import Dog from './Dog';
import Bird from './Bird';
import Cat from './Cat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Router</p>
      </header>
      <div className='router'>
        <div className='box'><Dog /> </div>
        <div className='box'><Bird /> </div>
        <div className='box'><Cat /> </div>
        
      </div>
    </div>
  );
}

export default App;
