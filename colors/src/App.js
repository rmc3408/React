import React, { Component } from 'react';
import Palette from './Palette';
import { generatePalette } from './colorhelpers';
import seedC from './seedColors';

class App extends Component {
    render() {
        //console.log(generatePalette(seedC[0]));
        return (
            <div>
                <Palette {...generatePalette(seedC[0]) }/>
            </div>
        )
    }
}

export default App
