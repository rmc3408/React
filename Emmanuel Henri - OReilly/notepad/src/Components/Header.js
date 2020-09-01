import React from "react";
import logo from './logo.svg';


const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <h2 className="App-title">Notepad Application </h2>
        <p> Building a React App from Scratch - by Emmanuel Henri - O'Reilly</p>
      </header>
      <div>
        <h2> {props.owner.name}'s Notepad</h2>
      </div>

    </div>
  );
};

export default Header;
