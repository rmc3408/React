import React, { Component } from "react";
import Dog from "./Dog";
import "./DogList.css";

class DogList extends Component {
  render() {
    //console.log(this.props);
    const listDogs = this.props.dogs.map((d) => (
      <Dog src={d.src} key={d.name} name={d.name} />
    ));
    return (
      <div>
        <h1 className="display-1 text-center my-5">My Dog List</h1>
            <div className="container">
            <div className='row'>{listDogs}</div>
        </div>
      </div>
    );
  }
}

export default DogList;
