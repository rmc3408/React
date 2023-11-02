import './App.css';
// import UseContextExamples from './components/useContext/index';
// import UseEffectExamples from './components/useEffect/index';
// import UseStatesExamples from './components/useState/index';
import UseReducerExamples from './components/useReducer/index';


function App() {
  console.log('APP RENDER COMPONENT')

  return (
    <div className="App">
      <UseReducerExamples />
      {/* 
      
      <UseContextExamples />
      <UseStatesExamples />
      <UseEffectExamples />
      */}
    </div>
  );
}

export default App;
