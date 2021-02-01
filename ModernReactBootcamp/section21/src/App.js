import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import Machine from "./Machine";
import Pop from "./Pop";
import Chips from "./Chips";
import Sardines from "./Sardines";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Navbar">
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/pop">POP</NavLink>
          <NavLink to="/chips">CHIPS</NavLink>
          <NavLink to="/fish" render={() => <Sardines name="Sardines" />} >FISH</NavLink>
        </nav>
        <Switch>
          <Route exact path="/pop" render={() => <Pop  name="coca-cola" />} />
          <Route exact path="/chips" render={() => <Chips name="Doritos" />} />
          <Route exact path="/fish" component={Sardines} />
          <Route exact path="/" render={() => <Machine list="List" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
