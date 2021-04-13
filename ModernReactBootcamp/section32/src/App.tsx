import './App.css';
import CountState from './CountState';
import CountHooks from './CountHooks';
import Toggler from './Toggler';
import MyFormHooks from './MyFormHooks';
import CustomForm from './CustomForm';
import SWAPMovies from './SWAPMovies';

const App = () => {
  return (
    <div className="App">
      
      <CountState />
      <CountHooks />
      <Toggler />
      <MyFormHooks /> 
      <CustomForm />
      <SWAPMovies />
    </div>
  );
}

export default App;
