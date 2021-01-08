import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { changeColor, rndColor } from "./helpers";

class ColorTable extends Component {
    static defaultProps = {
        numBoxes: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            boxes: Array.from({ length: this.props.numBoxes }, () => { return [rndColor(), rndColor(), rndColor()] }),
        };
        this.handleColour = this.handleColour.bind(this);
    }

    handleColour(idx) {
        //console.log(arrColor + " index " + idx);
        const newColor = changeColor(this.state.boxes[idx]);
        let newArrayOfColor = [...this.state.boxes];
        newArrayOfColor.splice(idx, 1, newColor);
        //console.log(removedFromarray);
        //console.log(newArrayOfColor);
        this.setState(
            {boxes: newArrayOfColor}
        );
    
    }

  render() {
    return (
      <div>
            <div className="ColorTable-container">
                {this.state.boxes.map((b, idx) =>
                    <div key={idx} onClick={() => this.handleColour(idx)}>
                    <ColorBox colour={this.state.boxes[idx]} />
                    </div>
                )}
        </div>
      </div>
    );
  }
}

export default ColorTable;
