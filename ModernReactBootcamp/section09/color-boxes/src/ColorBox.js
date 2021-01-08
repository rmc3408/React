import React, { Component } from "react";

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox-container">
        <div className="ColorBox-box"
          style={{ backgroundColor: `rgb(${this.props.colour[0]},${this.props.colour[1]},${this.props.colour[2]})` }}>
        </div>
      </div>
    );
  }
}
export default ColorBox;
