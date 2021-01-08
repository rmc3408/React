import React, { Component } from 'react';

class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.img && <img src={this.props.img.imgSrc} alt='coin'/>}

        {/* {this.props.img == null ? 'Start to Play' : <img src={this.props.img.imgSrc} alt='coin'/>} */}
      </div>
    )
  }
}
export default Coin;
