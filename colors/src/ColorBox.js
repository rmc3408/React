import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.background }} className='ColorBox'>
                <div className='copy-container'>
                    <div className='box-content'><span>{this.props.name}</span></div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>MORE</span>

            </div>
        )
    }
}

export default ColorBox