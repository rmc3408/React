import React, { Component } from 'react'
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css'
import Slider from 'rc-slider';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 300,
        };
        this.chosenLevel = this.chosenLevel.bind(this);
    }
    chosenLevel(newValue) {
        this.setState({
            level: newValue
        });
    }

    render() {
        const levelValues = { 100: 100, 200: 200, 300: 300, 400: 400, 500: 500, 600: 600, 700: 700, 800: 800, 900: 900 };
        const boxes = this.props.colors[this.state.level].map(cor => <ColorBox key={cor.id} background={cor.hex} name={cor.name} />);
        return (
          <div className="Palette">
            navbar
            <div className="slider">
                <Slider min={100} max={900} marks={levelValues} defaultValue={this.state.level} step={100} onAfterChange={this.chosenLevel}/>
            </div>
            <div className="Palette-colors">{boxes}</div>
            footer
          </div>
        );
    }
}

export default Palette
