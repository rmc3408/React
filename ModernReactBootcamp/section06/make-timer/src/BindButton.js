import React, { Component } from 'react'

export default class BindButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            isWinner: false
        };
        this.buttonClick = this.myPersonalClick.bind(this); // pass function content.
        this.rndClick = this.myRndClick.bind(this);
    }
    // In button, send buttonClick method (Child=bindbutton) to ReactComponent by onClick props
    // the function buttonClick does not have Body of the method. 
    // Inside child compoment have function body but not inside object
    // Bind method use everything in this class "Bindbutton" to be associated with object function.
    // Inside BindButton class there is a function myPersonalClick
    // connect function from class and object created 

    myPersonalClick() {
        this.setState({ clicked: true });
    }
    myRndClick() {
        const num = Math.ceil(Math.random()*10);
        this.setState({
            number: num,
        });
        if (num === 7) {
            this.setState({
                number: num,
                isWinner: true
            });
        }
    }


    render() {
        //console.log(this.rndClick);
        return (
            <div>
                <h3>{this.state.clicked ? 'YES' : "NO"}</h3>
                <button onClick={this.buttonClick}>Click me!</button>
                <br /><br /><br />
                <h3> My Random number is {this.state.number}</h3>
                <h1> {this.state.isWinner ? 'Winner' : <button onClick={this.rndClick}>Click me!</button>}</h1>
            </div>
        )
    }
}
