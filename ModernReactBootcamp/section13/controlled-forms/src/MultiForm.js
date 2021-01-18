import React, { Component } from 'react';


class MultiForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            password: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault(); //avoid reload page with POST method
        console.log(`the username is ${this.state.username}`, `the fullName is ${this.state.fullName}`);
        this.setState({
            fullName: '',
            email: '',
            password: ''
        });
    }



    render() {
        return (
            <div>
                <h2>Mulfi forms</h2>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="fName">Full Name</label>
                    <input type="text" id='fName' name="fullName" //id = label, name = event
                        value={this.state.fullName}
                        onChange={this.handleInput}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name="email" //id = label, name = event
                        value={this.state.email}
                        onChange={this.handleInput}
                    />

                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' name="password" //id = label, name = event
                        value={this.state.password}
                        onChange={this.handleInput}
                    />

                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default MultiForm;
