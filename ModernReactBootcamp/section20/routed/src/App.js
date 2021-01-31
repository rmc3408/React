import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Dog from './Dog';
import Bird from './Bird';
import Cat from './Cat';

function App() {
  const Animals = () => <h1>PET ZOO</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Router</p>
      </header>
      <nav className='App-nav'>
        <a href="/">Old link Home</a>
        <Link to='/'>Home</Link>
        <Link to='/cat'>Cat</Link>
        <Link to='/dog'>Dog</Link>
        <Link to='/bird'>Bird</Link>

        <NavLink exact activeClassName='App-link-active' to='/'>Home</NavLink>
        <NavLink activeClassName='App-link-active' to='/cat'>Cat</NavLink>
        <NavLink activeClassName='App-link-active' to='/dog'>Dog</NavLink>
        <NavLink activeClassName='App-link-active' to='/bird'>Bird</NavLink> 

        <NavLink activeClassName='App-link-active' to='/dog/r'>Dog render </NavLink>
        <NavLink activeClassName='App-link-active' to='/dog/c'>Dog create </NavLink> 


      </nav>
      <div className='router'>
        <Switch>
          <Route exact path='/dog' component={Dog} />
          <Route exact path='/bird' component={Bird} />
          <Route exact path='/cat' component={Cat} />
          <Route exact path='/' component={Animals} />

          
          {/*  create new component (render, didMount, WillUnmount) */}
          <Route exact path='/dog/c' component={()=> <Dog name="Muffin"/>} />
          {/*  Render component */}
          <Route exact path='/dog/r' render={()=> <Dog name="Cookie"/>} />


        </Switch>
        
        
      </div>
    </div>
  );
}

export default App;
