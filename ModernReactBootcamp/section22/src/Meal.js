import React from "react";

function Meal(props) {
  return (
    <div>
      <h1> this is a good meal</h1>
      <p> {props.match.params.meat} </p>
      <p> {props.match.params.drink} </p>
    </div>
  );
}

export default Meal;
