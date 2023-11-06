import './App.css';
import TransitionExample2 from './Transition-example2';
import TransitionExample3 from './Transition-example3';
import LayoutEffect from './useLayout';


function App() {
  console.log('APP RENDER COMPONENT')

  return (
    <div className="App">
      <TransitionExample3 />
    </div>
  );
}

export default App;
