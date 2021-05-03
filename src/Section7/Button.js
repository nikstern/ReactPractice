import React, { Component } from "react";

class Button extends Component {
  render() {
    let text = this.props.rolling ? "Rolling" : "Roll Dice";
    return (
      <button
        className="RollButton"
        disabled={this.props.rolling}
        onClick={this.props.onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
