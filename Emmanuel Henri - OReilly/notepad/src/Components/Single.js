import React from 'react';

const Single = (props) => {
    return (
        <div>
            <h3> {props.note.title}</h3>
            <p> {props.note.details} </p>
        </div>
    );

}


export default Single;
