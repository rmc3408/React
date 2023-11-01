
import React, { Component } from 'react'


export class ClassCounter extends Component {
  
  constructor(props) {
    super(props)

    console.log('CLASS COUNTER CONSTRUCTOR COMPONENT')
    this.state = {
      count: 0
    }
  }
  
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    console.log('CLASS COUNTER RENDER COMPONENT')
    return (
      <div>
        <h1>Counter {this.state.count}</h1>
        <button onClick={this.handleClick.bind(this)}>Add by Class</button>
      </div>
    )
  }
}

export default ClassCounter