import React, { Component } from 'react';
import Ball from './Ball';

export class Lottery extends Component {
    static defaultProps = {
        title: 'LottoMax',
        numMax: 40,
        numBalls: 6
    };
    constructor(props) {
        super(props);
        this.state = {
            //nums: []
            nums: Array.from({length: this.props.numBalls})
        };
        this.handleBtn = this.handleBtn.bind(this);
    }
    handleBtn() {
        this.roll();

    }

    roll() {
        this.setState(callState => ({
            nums: callState.nums.map(n => Math.ceil(Math.random() * this.props.numMax))
        })
        );

        /////////// Array.from defined array size. It is not to insert new.
        //////////// Do not call 6 times setState

        //console.log('rolled');
        // for (let i = 0; i < this.props.numBalls; i++){
        //     const rnd = Math.ceil(Math.random() * this.props.numMax);
        //     let round = [...this.state.nums, rnd];
        //     if (this.state.nums !== []) {
        //         round 
        //     } else {
        //         round = [rnd];
        //     }
        //     this.setState({
        //         nums: round
        //     });
        // }
    }

    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                {this.state.nums.map((b, index) => <Ball key={index} num={b} />
                )}
                <button onClick={this.handleBtn}>ROLL</button>
            </div>
        )
    }
}

export default Lottery;

