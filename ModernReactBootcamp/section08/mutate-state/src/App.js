//import ScoreKeeper from './ScoreKeeper';
//import IconList from './IconList';
import Lottery from './components/Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='LottoMini' numMax='10' numBalls='4'/>

    </div>
  );
}

export default App;
