import React, { Component } from 'react';

class List extends Component {
    render() {
      //const tasks = ['water flowers', 'make a cake', 'clean garden'];
      return (<ol>
        { this.props.tasks.map((task, index) => <li key={index}> {task}</li>)}
      </ol>);
    }
}
export default List;
