import React from 'react';

const inputList = (props) => {
    return (
        <div>
            <input type='text'
                onChange={props.changed}
                value={props.word}/>

        </div>
    );

};


export default myValid;