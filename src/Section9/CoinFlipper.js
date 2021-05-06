import { Component } from "react";
import Coin from "./Coin";
import { randomRange } from "../utils";
import "./CoinFlipper.css";
class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "heads",
      heads: 0,
      tails: 0
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    let side = randomRange(0, 2) === 0 ? "heads" : "tails";
    let heads = this.state.heads;
    let tails = this.state.tails;
    if (side === "heads") {
      heads++;
    } else {
      tails++;
    }
    this.setState({
      side: side,
      heads: heads,
      tails: tails
    });
  }
  render() {
    let descriptions = `${this.state.heads} heads and ${this.state.tails} tails so far`;
    return (
      <div>
        <h2>Click the coin to flip!</h2>
        <Coin side={this.state.side} onClick={this.handleFlip} />
        <p>{descriptions}</p>
      </div>
    );
  }
}

export default CoinFlipper;
