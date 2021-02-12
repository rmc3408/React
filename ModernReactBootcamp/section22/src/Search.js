import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'type your food',
        };
        this.InputSearch = this.InputSearch.bind(this);
    }
    InputSearch(evt) {
        this.setState({
            query: evt.target.value,
        });
    }
    render() {
        return (
            <div>
                <label>Search: </label>
                <input value={this.props.query} onChange={this.InputSearch} />
                <Link to={`/food/${this.state.query}`} >GO</Link>
                <h2>{this.state.query}</h2>
            </div>
        )
    }
}

export default Search
