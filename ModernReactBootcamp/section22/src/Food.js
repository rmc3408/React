import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Food extends Component {
    render() {
        const { name } = this.props.match.params;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        const checking = /\d/.test(name);
        return (
            <div>
                { checking ? <Redirect to='/' /> : (<div>
                    <h1>I love to eat {name}</h1>
                    <img src={url} alt={name} />
                </div>)
            }
            </div>
            
        )
    }
}

export default Food
