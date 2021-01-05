import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Die from './Die';



class RollDice extends Component {
    
    static defaultProps = {
        options: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor() {
        super();
        this.state = {
            dices: ['one','six'],
            color: '#3F51B5',
            size: '10x',
            isRolling: false,

            
        };
        
        this.roll = this.roll.bind(this);
    }
    
    roll() {
        //console.log('clicked');
        let newDice = [];
        //console.log(this.props.options.length);
        for (let index = 0; index < this.state.dices.length; index++) {
            const rnd = Math.floor(Math.random() * this.props.options.length);
            newDice[index] = this.props.options[rnd];
            //console.log(newDice[index]);
        }
        //console.log(newDice);
        this.setState({
            dices: newDice,
            isRolling: true
        });
        setTimeout(() => {
            this.setState({
                isRolling: false
            });
        },2000);
        
        
    }

    render() {
        return (
            <div className="Die-dices">
                <div className="Die-dice">
                {this.state.dices.map((thedice, index) => 
                    <Die
                        key={index}
                        dice={thedice}
                        colour={this.state.color}
                        size={this.state.size}
                        rolling={this.state.isRolling}
                    /> 
                )}
                </div>
                <div className="Die-btn">
                        <Button
                        disabled={this.state.isRolling}
                        onClick={this.roll}
                        variant="contained"
                        color="primary">{this.state.isRolling ? 'ROLLING' : 'Roll dice'}
                    
                        </Button>
                </div>
                              
            </div>
        )
    }
}
export default RollDice;