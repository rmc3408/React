import React, { Component } from 'react';

class Chips extends Component {
    render() {
        return (
            <div>
                <h1> Chip's brand = {this.props.name} </h1>
            </div>
        )
    }
}

export default Chips;