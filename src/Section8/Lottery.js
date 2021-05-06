import { Component } from "react";
import { randomRange } from "../utils";
import LotteryBall from "./LotteryBall";
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
      let value = randomRange(this.props.rangeMin, this.props.rangeMax);
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
      <div>
        <h2>{this.props.title}</h2>
        <div>{lotteryComponents}</div>
        <button onClick={this.setNumbers}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
