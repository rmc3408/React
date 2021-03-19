import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';
import NavBar from './NavBar'



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
                <NavBar levelValues={levelValues} chosenLevel={this.chosenLevel} default={this.state.level}/>
            
            <div className="Palette-colors">{boxes}</div>
            footer
          </div>
        );
    }
}

export default Palette
