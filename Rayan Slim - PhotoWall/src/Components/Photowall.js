import React, { Component } from 'react';
import Photo from './Photo';


class Photowall extends Component {
  render() {
    return (
        <div className="photogrid">
            {this.props.posteds.map((post, index) => <Photo posted={post} key={index} />)}
            
        </div>
    );
  }
}
export default Photowall;
