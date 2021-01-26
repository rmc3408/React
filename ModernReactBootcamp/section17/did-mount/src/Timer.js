import React, { Component } from 'react';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        console.log("contructor!");
    }
    componentDidMount() {
        console.log("did mount!");
        setInterval(() => {
            this.setState({
            time: new Date()
        });
        }, 1000);
        
    }

    render() {
        console.log("render!");
        return (
            <div>
    <h1> {this.state.time.getHours()} : {this.state.time.getMinutes()} :{this.state.time.getSeconds()}  </h1>
            </div>
        )
    }
}

export default Timer;
