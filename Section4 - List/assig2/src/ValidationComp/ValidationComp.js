import React from 'react';

const inputList = (props) => {

    const myStyle = {
        color: 'red'
    };
    return (
        <div>
            <p style={myStyle}> Inside component_ New word: {props.txt}, size {props.num} </p>
            

        </div>
    );

};
export default inputList;