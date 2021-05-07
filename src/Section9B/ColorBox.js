import { Component } from "react";
import "./ColorBox.css";
import { randomRange } from "../utils";

class ColorBox extends Component {
  get colors() {
    return [
      "#7868e6",
      "#b8b5ff",
      "#52057b",
      "#892cdc",
      "#bc6ff1",
      "#6f4a8e",
      "#45046a",
      "#5c2a9d"
    ];
  }

  constructor(props) {
    super(props);
    this.state = {
      color: this.getRandomColor()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomColor() {
    return this.colors[randomRange(0, this.colors.length)];
  }

  handleClick() {
    let newColor;
    do {
      newColor = this.getRandomColor();
    } while (this.state.color === newColor);
    this.setState({
      color: newColor
    });
  }

  render() {
    let colorStyle = { backgroundColor: this.state.color };
    return (
      <div
        onClick={this.handleClick}
        className="ColorBox"
        style={colorStyle}
      ></div>
    );
  }
}

export default ColorBox;
