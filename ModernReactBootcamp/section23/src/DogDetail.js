import React, { Component } from "react";
import "./DogDetail.css";

class DogDetail extends Component {
  render() {
    const { age, name, facts, src } = this.props.dogs;
    return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
      <div className='col-lg-5 col-11'>
        <div className='DogDetails-card card'>
          <img className='' src={src} alt={name} />
            <div className='card-body'>
              <h2 className="card-title">{name}</h2>
              <p>{age} years old</p>
              <ul className="list-group list-group-flush">
                {facts.map((fact, idx) => <li key={idx} className="list-group-item">{fact}</li>)}
              </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-danger" onClick={this.props.history.goBack}>BACK</button>
            </div>
          </div>
      </div></div></div>
    );
  }
}

export default DogDetail;
