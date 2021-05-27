import React, { Component } from "react";
import "./Square.css";
class Square extends Component {
  render() {
    const className = "Square" + (this.props.isLit ? " Square-lit" : "");
    return <td className={className} onClick={this.props.handleClick} />;
  }
}

export default Square;
