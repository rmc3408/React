import React, { Component } from 'react';

type MyState = {
    count: number;
}

type MyProps = {
    title?: string;
}

class CountState extends Component<MyProps, MyState> {
  static defaultProps: MyProps = {
    title: 'Class Component'
  };
  
  constructor(props: MyProps) {
      super(props);
      this.state = {
          count: 0,
        };
      }
    
    render() {
        const { count } = this.state;
        return (
          <div>
            <h1>{this.props.title}</h1>
            <h2>Counting: {count}</h2>
            <button onClick={() => { this.setState({ count: this.state.count + 1 })}}>PLUS ONE</button>
          </div>
        );
      }
}

export default CountState;

