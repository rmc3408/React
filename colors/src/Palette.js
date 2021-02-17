import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css'


class Palette extends Component {
    render() {
        const boxes = this.props.colors.map(cor => <ColorBox key={cor.color} background={cor.color} name={cor.name} />);
        return (
            <div className='Palette'>
                navbar
                <div className='Palette-colors'>
                    {boxes}
                </div>
                footer
            </div>
        )
    }
}

export default Palette
