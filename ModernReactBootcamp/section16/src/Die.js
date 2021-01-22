import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.sendClick = this.myOnClick.bind(this);
  }
  myOnClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const num;
    switch (this.props.val) {
      case 1:
        num = "one";
        break;
      case 2:
        num = "two";
        break;
      case 3:
        num = "three";
        break;
      case 4:
        num = "four";
        break;
      case 5:
        num = "one";
        break;
      case 6:
        num = "one";
        break;

      default:
        break;
    }

    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.sendClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
