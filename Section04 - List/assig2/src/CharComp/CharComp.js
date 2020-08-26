import React from 'react';
import './CharComp.css';

const charList = (props) => {
    return (
        <div className='result'>
        <p> Char element</p>
        <p> {props.letter}  </p>
        </div>
    );
 };

export default charList;