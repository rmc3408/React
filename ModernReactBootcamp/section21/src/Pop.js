import React, { Component } from 'react';

class Pop extends Component {
    render() {
        return (
            <div>
                <h1> The pop is {this.props.name} </h1>
            </div>
        )
    }
}

export default Pop;