import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';
import Head from './head.png';
import Tail from './tail.png';


class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            { imgSrc: Head },
            { imgSrc: Tail }
        ]
    };

    constructor(props) {
        super(props)
    
        this.state = {
            face: null,
            total: 0,
            head: 0,
            tail: 0
        }
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        this.flipper();
    }
    flipper() {
        const rnd = choice(this.props.coins);
        //console.log(rnd);
        this.setState(curSt => ({
            face: rnd,
            head: curSt.head + (rnd.imgSrc === Head ? 1 : 0),
            tail: curSt.tail + (rnd.imgSrc === Head ? 0 : 1), 
            total: curSt.total + 1
         }));

    }

    render() {
        //console.log(this.props.coins[this.state.face]);
        return (
            <div>
                <h1> Let's flip a coin</h1>
                <Coin img={this.state.face} />
                <button onClick={this.handleBtnClick}>Flip me!</button>
                <h3>Out of {this.state.total} flips. total =  {this.state.head} Heads and  {this.state.tail} Tails </h3>
            </div>
        )
    }
}

export default CoinFlip;
