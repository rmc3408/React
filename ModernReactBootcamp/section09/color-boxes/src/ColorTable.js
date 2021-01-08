import React, { Component } from "react";
import ColorBox from "./ColorBox";

class ColorTable extends Component {
  render() {
    return (
      <div>
        <div className="ColorTable-container">
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
        </div>
      </div>
    );
  }
}

export default ColorTable;
