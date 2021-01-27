import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends Component {
  static defaultProps = {
      numJokes: 10,
      emoji: [
          "em-nauseated_face",
          "em-disappointed_relieved",
          "em-neutral_face",
          "em-smiley",
          "em-rolling_on_the_floor_laughing"]
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isFullLoaded: false,
    };
    this.voteUP = this.voteUP.bind(this);
  }
  async componentDidMount() {
    while (this.state.jokes.length < this.props.numJokes) {
      let joke = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      //console.log(joke.data.id);
      joke.data.vote = 0;
      this.setState((st) => ({
        jokes: [...st.jokes, joke.data],
        isFullLoaded: true,
      }));
    }
  }
  voteUP(id, delta) {
    this.setState((st) => ({
      jokes: [...st.jokes.map((j) =>
          j.id === id ? { ...j, vote: j.vote + delta } : { ...j }
        ),
      ],
    }));
  }

  render() {
    const mappedJokes = this.state.jokes.map((j) => (
      <Joke
        key={j.id}
        id={j.id}
        joke={j.joke}
        vote={j.vote}
        emoji={this.props.emoji}    
        voteUP={this.voteUP}
      />
    ));
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Daddy</span> Jokes
          </h1>
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/grinning-face-with-one-large-and-one-small-eye_1f92a.png"
            alt="emoji"
          />
          <button className="JokeList-btn">New jokes</button>
        </div>
        <div className="JokeList-jokes">{mappedJokes}</div>
      </div>
    );
  }
}

export default JokeList;
