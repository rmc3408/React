import React from 'react';
import './ValidationComp.css';

const inputList = (props) => {

    

    let textVariable = null;
    if (props.num > 5) {
      textVariable = (
        <div>  <p> Nice text </p>  </div>);
    } else {
      textVariable = (
        <div>  <p> Still small text, write it more! </p>  </div>);
    }

    return (
        <div class='boxcontainer'>
            <p> Inside component_ New word: {props.txt}, size {props.num} </p>
            {textVariable}

        </div>
    );

};
export default inputList;