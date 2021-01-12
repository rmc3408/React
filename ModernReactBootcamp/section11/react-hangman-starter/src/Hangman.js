import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import randomWord from './words';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6, //this.props.images.length,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    };
    this.handleGuess = this.handleGuess.bind(this);
  }
  isGameOver() {
    if (this.props.maxWrong > this.state.nWrong) {
      return <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong}/${this.props.maxWrong}`} />;
    }
    else {
      return <img src={this.props.images[this.props.maxWrong]} alt={`gameover`}/>;
    }
  }
  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").map((ltr,idx) => (
      <button
        key={idx}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const isWinner = this.guessedWord().join("") === this.state.answer;
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <p>Number Wrong guesses: {this.state.nWrong}</p>
        {this.isGameOver()} 
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {this.state.nWrong < this.props.maxWrong ? 
          (<p className='Hangman-btns'>{isWinner ? <h2>You WIN</h2> : this.generateButtons()}</p>) :
          (<div><h2>Game Over</h2><p> Answer was {this.state.answer}</p></div>)}
        <button id='reset' onClick={() => {
          this.setState({
            nWrong: 0,
            guessed: new Set(),
            answer: randomWord()
          });
        }}>Restart</button>
      </div>
    );
  }
}

export default Hangman;
