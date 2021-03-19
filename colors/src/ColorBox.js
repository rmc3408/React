import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
    };
    this.copyEffect = this.copyEffect.bind(this);
  }

  copyEffect() {
    this.setState(
      {
        isCopied: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            isCopied: false,
          });
        }, 1600);
      }
    );
  }

  render() {
    const { background } = this.props;
    const { isCopied } = this.state;
    return (
      <CopyToClipboard text={this.props.background} onCopy={this.copyEffect}>
        <div style={{ backgroundColor: background }} className="ColorBox">
          <div
            className={`copy-overlay ${isCopied && "show"}`}
            style={{ backgroundColor: background }}
          />
            <div className={`copied-msg ${isCopied && "show"}`}>
              <h1>COPIED</h1>
              <p>{background}</p>
            </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{this.props.name}</span>
            </div>

            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
