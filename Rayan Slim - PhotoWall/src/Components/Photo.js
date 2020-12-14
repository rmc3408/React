import React, { Component } from 'react';


class Photo extends Component {
    render() {
        const thePost = this.props.posted;
        return (
            <figure className="figure">
                <img className="photounique" src={thePost.imageLink} alt={thePost.description} />
                <figcaption> <p> {thePost.description} </p>  </figcaption>
                <div className="btn-container">
                    <button className="btn"> Remove </button>
                </div>
                
            </figure>)
    }
}
export default Photo;
