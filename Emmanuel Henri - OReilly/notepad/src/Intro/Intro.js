import React from 'react';


const Intro = (props) => {
    return (
        <div>
            <p> My name is {props.user.name}, age {props.user.age}</p>

        </div>

    );

};
export default Intro;