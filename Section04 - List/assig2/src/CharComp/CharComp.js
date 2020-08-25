import React from 'react';
import './CharComp.css';

const charList = (props) => {
    return (
        <div className='result'>
        <p> Char component</p>
        <p> {props.oneChar}  </p>
        </div>
    );
 };

export default charList;