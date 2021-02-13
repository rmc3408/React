import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    handleClick() {
        alert('logged');
        this.props.history.push('/food/salmon');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Login</button>
                <button onClick={this.props.history.goBack}>BACK</button>
                <button onClick={this.props.history.goForward}>Forward</button>
            </div>
        )
    }
}

export default withRouter(Login); 
