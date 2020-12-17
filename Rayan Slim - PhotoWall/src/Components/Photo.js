import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo(props) {
    const thePost = props.posted;
    return (
        <figure className="figure">
            <Link to={`/single/${thePost.id}`}>
                <img className="photounique" src={thePost.imageLink} alt={thePost.description} />
            </Link>
            <figcaption> <p> {thePost.description} </p>  </figcaption>
            <div className="btn-container">
                <button
                    className="btn" onClick={() => { 
                        props.removePost(props.index);
                        props.history.push('/');
                    }}
                > Remove </button>
                <Link className='btn' to={`/single/${thePost.id}`} >
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {/* if the comment has a value  */}
                        {props.comments[thePost.id] ? props.comments[thePost.id].length : 0} 
                    </div>
                </Link>
            </div>
                
        </figure>);
}

Photo.PropType = {
    thePost: PropTypes.object.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired
};

export default Photo;
