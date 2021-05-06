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
    let id = setInterval((e) => {
      this.setState({
        die1: randomRange(1, 6),
        die2: randomRange(1, 6)
      });
    }, 100);

    setTimeout((e) => {
      this.setState({ rolling: false });
      clearInterval(id);
    }, 800);
  }

  render() {
    return (
      <div className="content">
        <div className="dice">
          <Die value={this.state.die1} rolling={this.state.rolling} />
          <Die value={this.state.die2} rolling={this.state.rolling} />
        </div>
        <Button rolling={this.state.rolling} onClick={this.handleClick} />
      </div>
    );
  }
}

export default RollDice;
