import React, { Component } from "react";

class Pop extends Component {
  render() {
    return (
      <div className="Pop">
        <div className="Pop-container">
          <div className="Pop-Block"> XXXXXXXXX </div>
          <div className="Pop-Block">
            <h1> The pop is {this.props.name} </h1>
          </div>
          <div className="Pop-Block"> XXXXX </div>
        </div>
      </div>
    );
  }
}

export default Pop;
