//CREATE A FUNCTIONAL COMPONENT

import React from 'react'; //to convert to JSX

const person = (props) => {
    return (<p> I'm a person called {props.name}!
     I have {props.age} ,
     but I look like {Math.floor(Math.random() * 40)} years old! </p>)

};

export default person; //export the function person