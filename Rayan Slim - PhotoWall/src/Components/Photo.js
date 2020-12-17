import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
    const thePost = props.posted;
    return (
        <figure className="figure">
            <Link to={'/Single'}>
                <img className="photounique" src={thePost.imageLink} alt={thePost.description} />
            </Link>
            <figcaption> <p> {thePost.description} </p>  </figcaption>
            <div className="btn-container">
                <button
                    className="btn" onClick={() => { 
                    props.removePost(props.index);
                    }}
                > Remove </button>
            </div>
                
        </figure>);
}

Photo.PropType = {
    thePost: PropTypes.object.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired
};

export default Photo;
