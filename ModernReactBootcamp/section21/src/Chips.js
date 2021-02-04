import React, { Component } from 'react';
import fries from './fries.png';
import {Link} from 'react-router-dom'
import Message from './Message';
class Chips extends Component {


    numberRandomizer(){
        var x = Math.floor((Math.random() * 500) + 300); //random number between 300 and 800
        return x;
    }
      
    render() {
        let count = 0;
        return (
            <div>
                <Message> 
                <h1> Chip's brand = {this.props.name} </h1>
                <button onClick={() => count++ }> Click </button>
                <div> <img src={fries} alt={count} /> </div>
                <Link to='/' >Go back</Link></Message>
            </div>
        )
    }
}

export default Chips;