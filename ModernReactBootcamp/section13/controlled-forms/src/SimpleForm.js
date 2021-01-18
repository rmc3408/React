import React, { Component } from 'react'

class SimpleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(evt) {
        this.setState({
            username: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault(); //avoid reload page with POST method
        console.log(`the username is ${this.state.username}`)
    }



    render() {
        return (
            <div>
                <h2>Simple form</h2>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"
                        value={this.state.username}
                        onChange={this.handleInput}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default SimpleForm;
