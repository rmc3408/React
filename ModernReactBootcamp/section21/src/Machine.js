import React, { Component } from 'react';

class Machine extends Component {
    render() {
        return (
            <div>
                <h1> Machine List</h1>
                {this.props.list}
            </div>
        )
    }
}

export default Machine;
