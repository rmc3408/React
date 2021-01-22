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
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.sendClick}
      >{this.props.val}</button>
    );
  }
}

export default Die;
