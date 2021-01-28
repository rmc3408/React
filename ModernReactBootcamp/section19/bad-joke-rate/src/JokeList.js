import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends Component {



  static defaultProps = {
      posts: 4,
      emoji: [
          "em-nauseated_face",
          "em-disappointed_relieved",
          "em-neutral_face",
          "em-smiley",
          "em-rolling_on_the_floor_laughing"]
  };



  constructor(props) {
    super(props);

    this.stringParseJSON = window.localStorage.getItem("stored");
    this.state = {
      jokes: JSON.parse(this.stringParseJSON) || [],
      totalJokes: JSON.parse(window.localStorage.getItem("total")) || this.props.posts,
      numClicks: 0,
      isLoaded: JSON.parse(window.localStorage.getItem("isLoaded")) || false,
    };
    this.voteUP = this.voteUP.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  
  async getJokes() {
      while (this.state.jokes.length < this.state.totalJokes) {
      let joke = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      //console.log(joke.data.id);
      joke.data.vote = 0;
      this.setState((st) => ({
          jokes: [...st.jokes, joke.data],
      }));
    }    
    window.localStorage.setItem("stored", JSON.stringify(this.state.jokes));
    window.localStorage.setItem("total", this.state.totalJokes);
  }

  loadingJokes() {
    setTimeout(() => {
      this.getJokes().then(() => {
        this.setState({
          isLoaded: true,
        });
      });
    }, 3000);
    window.localStorage.setItem("isLoaded", true);
  }

  handleButton() {
    this.setState(st => ({
      numClicks: st.numClicks + 1,
      isLoaded: false,
      totalJokes: st.totalJokes + this.props.posts,
    }));
    this.loadingJokes();
    //must be here to execute AFTER update.
  }


  async componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.loadingJokes();
    }
  }




  voteUP(id, delta) {
    this.setState((st) => ({
      jokes: [...st.jokes.map((j) =>
          j.id === id ? { ...j, vote: j.vote + delta } : { ...j }
        ),
      ],
    }), () => window.localStorage.setItem("stored", JSON.stringify(this.state.jokes)));
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
    const isLoading = this.state.isLoaded ? 'JokeList-jokes' : 'loader';
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
          <button className="JokeList-btn" onClick={this.handleButton}>New jokes</button>
        </div>
        <div className={isLoading}>{this.state.isLoaded ? mappedJokes : ''}</div>
      </div>
    );
  }
}

export default JokeList;
