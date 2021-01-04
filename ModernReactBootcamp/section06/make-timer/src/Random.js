import React, { Component } from 'react'

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
        this.makeTimer();
    }
    makeTimer() {
        setInterval(() => {
            let rnd = Math.floor(Math.random() * this.props.maxTry);
            this.setState({
                num: rnd
            });
        }, 1000);

    }
    


    render() {
        return (
            <div>
                <h3> Number is {this.state.num} </h3>
                
            </div>
        )
    };
}
export default Random;
