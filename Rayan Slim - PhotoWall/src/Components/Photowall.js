import React from 'react';
import Photo from './Photo';


function Photowall(props) {
      return (
        <div className="photogrid">
            {props.posteds.map((post, index) => <Photo posted={post} key={index} onRemovePhoto={props.onRemovePhoto} />)}
            
        </div>
    );
  
}
export default Photowall;
