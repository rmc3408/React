import logo from './logo.svg';
import Random from './Random';
import BindButton from './BindButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Random maxTry={7} />
        <BindButton />
      </header>
    </div>
  );
}

export default App;
