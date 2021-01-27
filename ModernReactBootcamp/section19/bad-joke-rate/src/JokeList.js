import React, { Component } from "react";
import axios from "axios";
import Joke from './Joke';
import './JokeList.css';

class JokeList extends Component {
    static defaultProps = {
        numJokes: 10,
    };
  constructor(props) {
    super(props);
      this.state = {
        jokes: [],
        isFullLoaded: false,
    };
  }
    async componentDidMount() {
        while(this.state.jokes.length < this.props.numJokes) {
            let joke = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: 'application/json'}});
            //console.log(joke.data.id);
            this.setState(st => ({
                jokes: [...st.jokes, joke.data ],
                isFullLoaded: true,
            }));
        }
  }

    render() {
        const mappedJokes = this.state.jokes.map(j => <Joke key={j.id} joke={j.joke}/> )
        return (
            <div className='JokeList'>
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Daddy</span> Jokes</h1>
                    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/grinning-face-with-one-large-and-one-small-eye_1f92a.png" alt='emoji' />
                    <button className="JokeList-btn">New jokes</button>
                </div>
                <div className="JokeList-jokes">
                    {mappedJokes}
                </div>
            </div>);
  }
}

export default JokeList;
