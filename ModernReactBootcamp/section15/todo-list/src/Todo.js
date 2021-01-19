import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div>
                <button>Edit</button>
                <button> X </button>
                {this.props.note}
            </div>
        )
    }
}

export default Todo
