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
      let urlDraw = 'https://deckofcardsapi.com/api/deck/' + this.state.deck_id + '/draw/';
      try {
        let draw = await axios.get(urlDraw);
        if (draw.data.remaining === 0) throw new Error('No card left');
        //console.log(draw.data.cards[0].image);
        this.setState(st => ({
            card: [...st.card, draw.data.cards[0].image],
            remaining: draw.data.remaining
        }));

      } catch (err){
        alert(err);
      } 
    }

  render() {
    const cards = this.state.card.map((c,idx) => <Card key={idx} num={this.state.remaining} imgUrl={c}/>);
    return (
      <div>
        <header>
          <h1 className="Table-title "> Card Deck Dealer </h1>
          <p className="Table-title-subtitle"> Click in deal to drop a card</p>
          <button className="Table-btn" onClick={this.handleBtn}>DEAL</button>
        </header>
        <div className="Card-deck">
          {cards}
        </div>
      </div>
    );
  }
}

export default Table;
