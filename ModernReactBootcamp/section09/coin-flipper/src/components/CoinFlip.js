import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
    render() {
        return (
            <div>
                <h1> Let's flip a coin</h1>
                <Coin img={'coin'} />
                <button >Flip me!</button>
                <h3>Out of 20 flips. total = 3 Heads and 5 Tails </h3>
            </div>
        )
    }
}

export default CoinFlip;
