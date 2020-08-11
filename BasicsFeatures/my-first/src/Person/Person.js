//CREATE A FUNCTIONAL COMPONENT

import React from 'react'; //to convert to JSX

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
        
            <p onClick={props.transferClick}> I'm a person called {props.name} and I have {props.age} ,
     but I look like {Math.floor(Math.random() * 40)} years old! </p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )

};

export default person; //export the function person