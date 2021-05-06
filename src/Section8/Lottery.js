import { Component } from "react";
import { randomRange } from "../utils";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";
class Lottery extends Component {
  static defaultProps = {
    balls: 4,
    rangeMin: 1,
    rangeMax: 20,
    title: "Lottery"
  };

  constructor(props) {
    super(props);
    this.setNumbers = this.setNumbers.bind(this);
    this.getNumbers = this.getNumbers.bind(this);
    this.state = {
      ballValues: this.getNumbers()
    };
  }

  getNumbers() {
    let values = [];
    for (let i = 0; i < this.props.balls; i++) {
      let value;
      do {
        value = randomRange(this.props.rangeMin, this.props.rangeMax);
      } while (values.indexOf(value) !== -1);
      values.push(value);
    }
    return values;
  }

  setNumbers() {
    this.setState({ ballValues: this.getNumbers() });
  }

  render() {
    let lotteryComponents = this.state.ballValues.map((v) => (
      <LotteryBall value={v} />
    ));
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        <div className="Balls">{lotteryComponents}</div>
        <button onClick={this.setNumbers}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
