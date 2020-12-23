import React from 'react';
import './ValidationComp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inputList = (props) => {

    let textVariable = null;
    if (props.num > 5) {
      textVariable = (
        <div className="miniLen">  <p> Nice text </p>  </div>);
    } else {
      textVariable = (
        <div className="miniLen">  <p> Still small text, write it more! </p>  </div>);
    }

    return (
        <div>
        <p> Inside component</p>
        <p> {props.txt} = size lenght {props.num} </p>
            {textVariable}

        </div>
    );

};
export default inputList;