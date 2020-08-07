//CREATE A FUNCTIONAL COMPONENT

import React from 'react'; //to convert to JSX

const person = (props) => {
    return (
        <div>
            <p> I'm a person called {props.name}! I have {props.age} ,
     but I look like {Math.floor(Math.random() * 40)} years old! </p>
            <p> {props.children} = element between open/close tag</p>
        </div>)

};

export default person; //export the function person