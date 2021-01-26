import React, { Component } from 'react';
import axios from 'axios';

export class ZenPhrase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
        }
        console.log("contructor!");
    }
    componentDidMount() {
        console.log("did mount!");
        axios.get('https://api.github.com/zen').then(r => {
            setTimeout(function() {
                this.setState({
                quote: r.data,
            });
            }.bind(this), 2000);
            
            
            //console.log(r)
        });

    }
    render() {
        return (
            <div>
                <h1> Today's proverbs is ...</h1>
                <span className='loader'></span>
                <p> {this.state.quote} </p>

            </div>
        )
    }
}

export default ZenPhrase;
