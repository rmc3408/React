import React from 'react';

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
export default Photo;
