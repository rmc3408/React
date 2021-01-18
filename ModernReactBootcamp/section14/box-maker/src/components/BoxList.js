import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { id: uuidv4(), height: '150', width: '150', backgroundColor: 'purple' },
                { id: uuidv4(), height: '200', width: '500', backgroundColor: 'yellow' },
          ]  
        };
        this.addItemBox = this.addItemBox.bind(this);
        this.removeBox = this.removeBox.bind(this);

    }
    
    addItemBox(theBox) {
        let newBoxWithID = { ...theBox, id: uuidv4() };
        this.setState({
            boxes: [...this.state.boxes, newBoxWithID]
        });
    }
    removeBox(id) {
        const idx = this.state.boxes.findIndex(id);
        console.log(idx);
        this.setState({
            boxes: [...this.state.boxes.splice(idx, 1)]
        });
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addItemBox}/>
                {this.state.boxes.map(p => <Box
                    key={this.state.boxes.id}
                    {...p}
                    removebyID={this.removeBox}
                />)}
                
            </div>
        )
    }
}

export default BoxList;
