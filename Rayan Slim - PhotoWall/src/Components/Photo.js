import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    const thePost = props.posted;
    return (
        <figure className="figure">
            <img className="photounique" src={thePost.imageLink} alt={thePost.description} />
            <figcaption> <p> {thePost.description} </p>  </figcaption>
            <div className="btn-container">
                <button
                    className="btn" onClick={() => { 
                    props.onRemovePhoto(thePost);
                    }}
                > Remove </button>
            </div>
                
        </figure>);
}

Photo.PropType = {
    thePost: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};

export default Photo;
