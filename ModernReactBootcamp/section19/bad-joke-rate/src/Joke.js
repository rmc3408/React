import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    
    handleUp(delta) {
        this.props.voteUP(this.props.id, delta);
    }

    render() {
        const face = this.props.vote >= 6 ? 4 :
            (this.props.vote >= 3 ? 3 : (this.props.vote > -3 ? 2 :
                (this.props.vote > -6 ? 1 : 0)));
        const mood = this.props.vote >= 6 ? 'green' :
                (this.props.vote >= 3 ? 'yellow' : (this.props.vote > -3 ? 'azure' :
                    (this.props.vote > -6 ? 'pink' : 'red')));
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow-up" onClick={() => this.handleUp(1)}></i>
                    <span style={{border: `3px solid ${mood}`}} className="Joke-votes">{this.props.vote}</span>
                    <i className="fas fa-arrow-down" onClick={() => this.handleUp(-1)}></i>
                </div>
                <div className="Joke-text">{this.props.joke}</div>
                <div className="Joke-smiley"><i className={`em ${this.props.emoji[face]}`} aria-label="BIRD"></i></div>
            </div>
        )
    }
}

export default Joke;
