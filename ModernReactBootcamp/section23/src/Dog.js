import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dog extends Component {
    render() {
        return (
            <div className="Dog col-lg-4 col-sm-6 text-center">
                <img  src={this.props.src} alt={this.props.name} />
                <Link className='underline' to={`/dogs/${this.props.name}`}>{this.props.name}</Link>
            </div>
        )
    }
}

export default Dog