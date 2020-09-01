import React from "react";
import "../App.css";
import logo from "./logo.svg";

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Notepad Application </h2>
        <p> Building a React App from Scratch - by Emmanuel Henri - O'Reilly</p>
      </header>
      <nav className="navbar-fixed teal lighten-2">
        <div className="teal lighten-2">
          <div className="nav-wrapper"> 
            <div className="brand-logo center"> {props.owner.name}'s Notepad</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
