import React, { Component } from 'react'

class Box extends Component {
    
    
    render() {
        const myCSStyle = {
            marginTop: 80,
            marginLeft: 80,
            display: 'inline-block',
        };
        const boxStyle = {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.backgroundColor
        };

        return (
            <div style={myCSStyle} >
                <div style={boxStyle}></div>
                <button onClick={() => { this.props.removeByID(this.props.id); }}> Remove this Box </button>
            </div>

        )
    }
}

export default Box
