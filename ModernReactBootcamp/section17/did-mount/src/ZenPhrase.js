import React, { Component } from 'react';
import './ZenPhrase.css';
import axios from 'axios';

export class ZenPhrase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            isLoaded: false,
        }
        console.log("contructor!");
    }
    componentDidMount() {
        console.log("did mount!");
        axios.get('https://api.github.com/zen').then(r => {
            setTimeout(function() {
                this.setState({
                    quote: r.data,
                    isLoaded: true
            });
            }.bind(this), 2000);
           
        });

    }
    render() {
        const prov = <div><h1> Today's proverbs is ...</h1><p>{this.state.quote}</p></div>;
        return (
            <div>
                {this.state.isLoaded ? prov : < div className='loader'></div>}
            </div>
        )
    }
}

export default ZenPhrase;
