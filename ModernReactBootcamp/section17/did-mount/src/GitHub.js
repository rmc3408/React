import React, { Component } from 'react';
import axios from 'axios';

export class GitHub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '',
            login: ''
        };
    }
    async componentDidMount() {
        const url = ' https://api.github.com/users/' + this.props.username;
        const result = await axios.get(url);
        this.setState({
            name: result.data.name,
            img: result.data.avatar_url,
            login: result.data.login
        });
        console.log(result.data);
    }

    render() {
        return (
            <div>
                <h1>username: {this.state.name}</h1>
                <img src={this.state.img} alt={this.state.login}/>
            </div>
        )
    }
}

export default GitHub
