import React from 'react';

const userinput = (props) => {
    return (
    <div>
            <input type="text" onChange={props.propertyToChange} value={props.firstname}/>
    </div>
        

    );
}
export default userinput;
