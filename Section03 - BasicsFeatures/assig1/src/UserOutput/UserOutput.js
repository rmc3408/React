import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="container"> 
        <p onClick={props.transferClick}> Account: {props.username} = {props.firstname} </p>
        
            <h3> {props.title} </h3>
        <p>
                ? Add two-way-binding to your input (in UserInput) to also display the starting username 
        </p>
          
        </div>
    );
}
export default useroutput;