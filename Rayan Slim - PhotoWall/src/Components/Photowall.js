import PropType from 'prop-types';
import React from 'react';
import Photo from './Photo';

function Photowall(props) {
      return (
        <div className="photogrid">
            {props.posteds.map((post, index) => <Photo posted={post} key={index} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    );
}

//Validation process
Photowall.propTypes = {
    posts: PropType.array.isRequired,
    onRemovePhoto: PropType.func.isRequired
};

export default Photowall;
