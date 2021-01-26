import React, { Component } from "react";
import axios from 'axios';
import Card from "./Card";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deck_id: "",
        remaining: undefined,
        card: [],
      };
      this.handleBtn = this.handleBtn.bind(this);
  }

    async componentDidMount() {
        const urlDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle';
        const shuffle = await axios.get(urlDeck);
        this.setState({
            deck_id: shuffle.data.deck_id, 
            remaining: shuffle.data.remaining
        });
    }

    async handleBtn() {
        const urlDraw = 'https://deckofcardsapi.com/api/deck/' + this.state.deck_id + '/draw/';
        const draw = await axios.get(urlDraw);
        //console.log(draw.data.cards[0].image);
        this.setState(st => ({
            card: [...st.card, draw.data.cards[0].image],
            remaining: draw.data.remaining
        }));
    }

    async componentDidUpdate() {

         
    }
    
    
  render() {
    return (
      <div>
        <header>
          <h1> Card Deck Dealer </h1>
          <p> Click in deal to drop a card </p>
          <button onClick={this.handleBtn}>DEAL</button>
        </header>
        <div>
                <Card remaining={this.state.remaining} card={this.state.card} />
        </div>
      </div>
    );
  }
}

export default Table;
