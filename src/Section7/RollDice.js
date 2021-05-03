import React, { Component } from "react";
import { randomRange } from "../utils";
import Die from "./Die";
import Button from "./Button";
import "./RollDice.css";
class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: randomRange(1, 6),
      die2: randomRange(1, 6),
      rolling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      die1: randomRange(1, 6),
      die2: randomRange(1, 6),
      rolling: true
    });
    setTimeout((e) => {
      this.setState({ rolling: false });
    }, 800);
  }

  render() {
    return (
      <div className="content">
        <div className="dice">
          <Die value={this.state.die1} />
          <Die value={this.state.die2} />
        </div>
        <Button rolling={this.state.rolling} onClick={this.handleClick} />
      </div>
    );
  }
}

export default RollDice;
