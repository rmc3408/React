import React, { Component } from "react";
import "./App.css";

import NumberList from "./NumberList";
import BetterNumberList from "./BetterNumberList";
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import ButtonList from "./ButtonList";
import ExperimentalSquare from './ExperimentalSquare';
import WiseSquareWithProps from './WiseSquareWithProps';

class App extends Component {
  render() {
    return (
      <div>
        <NumberList />
        <BetterNumberList />
        <AnnoyingForm />
        <ButtonList />
        <CopyDemo />

        <ExperimentalSquare />
        <WiseSquareWithProps />

      </div>
    );
  }
}

export default App;
