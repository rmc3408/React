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
    let num;
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
        num = "five";
        break;
      case 6:
        num = "six";
        break;
      default:
        num = null;
        break;
    }
    const { locked, isRolling, disabled } = this.props;
    const lockerDie = ` Die${locked ? "-locked" : ""}`;
    const rollingDie = locked ? '' : ` Die${isRolling ? "-rolling" : ""}`;
    const die = ` fas fa-5x fa-dice-${num}`;

    const myClassName = "Die " + die + rollingDie + lockerDie;

    return (
      <i onClick={this.sendClick} className={myClassName} disabled={disabled}></i>
    );
  }
}

export default Die;
