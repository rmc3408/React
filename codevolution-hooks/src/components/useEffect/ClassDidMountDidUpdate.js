
import React, { Component } from 'react'


export class ClassDidMountDidUpdate extends Component {
  
  constructor(props) {
    super(props)

    console.log('CLASS COUNTER CONSTRUCTOR COMPONENT')
    this.state = {
      count: 0,
      name: ''
    }
  }
  
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleInput = (e) => {
    this.setState(st => ({ ...st, name: e.target.value }))
  }

  componentDidMount() {
    console.log('CLASS DID MOUNT COMPONENT AFTER FIRST RENDER')
    document.title = `Clicked ${this.state.count} time`
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CLASS DID UPDATE COMPONENT AFTER CLICKED AND RE-RENDER')
    if (prevState.count !== this.state.count) {
      console.log('INSIDE CONDITION OF CLASS DID UPDATE => PREV != ACTUAL STATE', prevProps, prevState, this.state)
      document.title = `Clicked ${this.state.count} time`
    }
  }

  render() {
    console.log('CLASS RENDER COMPONENT')
    return (
      <div>
        <h1>Counter {this.state.count}</h1>
        <input type="text" value={this.state.name} onChange={this.handleInput.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Add by Class</button>
      </div>
    )
  }
}

export default ClassDidMountDidUpdate