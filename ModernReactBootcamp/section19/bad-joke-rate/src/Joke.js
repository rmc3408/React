import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    render() {
        return (
            <div>
                {this.props.joke}
            
            </div>
        )
    }
}

export default Joke;
