import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import Food from "./Food";
import Meal from "./Meal";
import "./App.css";
import Search from "./Search";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> - Router - </p>
        <Login /> {/* do not belong Router - use withRouter inside component */}
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          {/* In Render, need to pass props as attributes. */}
          <Route exact path="/food/:name" render={(rProps) => <Food {...rProps} />} />
          {/* Component automatic pass default Route props = match, history, location */}
          <Route exact path="/food/:meat/:drink" component={Meal} />  
          <Route render={() => <h1>error 404</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
