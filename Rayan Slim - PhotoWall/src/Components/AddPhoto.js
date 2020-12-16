//import PropType from 'prop-types';
import React, { Component } from 'react';


class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmittion = this.handleSubmittion.bind(this);
    }
    handleSubmittion(event) {
        event.preventDefault();
        const nameLink = event.target.elements.imageLink.value;
        const nameDescription = event.target.elements.description.value;
        console.log(nameLink + " " + nameDescription);
    }
    render() {
        return (<div>
            <h2> PhotoWall </h2>
           
            <div className="forma">
                <h5> Upload your picture</h5>
                <form onSubmit={this.handleSubmittion} >
                    <input type="text" placeholder="link.." name="imageLink" />
                    <input type="text" placeholder="description" name="description" />
                    <button className="btn"> Upload </button>
                </form>
            </div>
        </div>);
    }
}
export default AddPhoto;
