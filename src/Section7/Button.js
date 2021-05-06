import React, { Component } from "react";

class Button extends Component {
  render() {
    let text = this.props.rolling ? "Rolling" : "Roll Dice";
    let active = this.props.rolling ? "Active" : "";
    return (
      <button
        className={active}
        disabled={this.props.rolling}
        onClick={this.props.onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
