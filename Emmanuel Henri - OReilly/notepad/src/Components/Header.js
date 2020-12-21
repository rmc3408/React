import React from "react";
import "../App.css";
import logo from "./logo.svg";

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title"> Note Application </h2>
      </header>
      <nav className="navbar-fixed teal lighten-2">
        <div className="teal lighten-2">
          <div className="nav-wrapper"> 
            <div className="brand-logo center"> {props.owner.name}'s Today list</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
