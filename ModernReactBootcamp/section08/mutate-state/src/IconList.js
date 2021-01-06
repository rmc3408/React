import React, { Component } from 'react';

class IconList extends Component {
    static defaultProps = {
        name: [
          "angry",
          "anchor",
          "archive",
          "at",
          "archway",
          "baby",
          "bell",
          "bolt",
          "bone",
          "car",
          "city",
          "cloud",
          "couch"
        ]
      };
    
    constructor(props) {
        super(props);
        this.state = {
            icons: [],
            todos: [
                { task: 'do the dishes', done: false, id: 1 },
                { task: 'vacuum the floor', done: true, id: 2 }
            ]
        };
        this.addIcon = this.choiceIcon.bind(this);

    }
    choiceIcon() {
        let idx = Math.floor(Math.random() * this.props.name.length);
        let newIcon = this.props.name[idx];
        this.setState({ icons: [...this.state.icons, newIcon] });
      }

    
    render() {
        const theIcon = this.state.icons.map((icon,idx) => <i key={idx} className={`fas fa-${icon}` } /> )
        return (
            <div className="IconList">
                <h1>Icons: {theIcon} </h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    }
}
export default IconList;