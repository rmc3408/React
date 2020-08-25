import React from 'react'; //import to each component
import './UserInput.css';

const userinput = (props) => {
    return (
    <div>
            <input type="text" onChange={props.propertyToChange} value={props.currentname} />
            
    </div>
        

    );
}
export default userinput; //to use this component.
