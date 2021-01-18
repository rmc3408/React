import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';
import MultiForm from './MultiForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Section 13 - Controlled Forms
        </p>
      </header>
      <div className="SimpleForm"> 
        <SimpleForm />
      </div>
      <div className="MultiForm"> 
        <MultiForm />
      </div>

    </div>
  );
}

export default App;
