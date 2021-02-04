import React, { Component } from 'react';
import Message from './Message';

class Machine extends Component {
    render() {
        return (
            
            <div className="machine">
                <Message> 
                <h1> Machine List</h1>
                    {this.props.list}
                </Message>
            </div>
        )
    }
}

export default Machine;
