import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <a href="/">ReactColorPicker</a>
        </div>
        <div className="slider-level">
          <span>Level: {this.props.default}</span>
          <div className="slider">
            <Slider
              min={100}
              max={900}
              marks={this.props.levelValues}
              defaultValue={this.props.default}
              step={100}
              onAfterChange={this.props.chosenLevel}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
