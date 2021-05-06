import { Component } from "react";
import "./LotteryBall.css";
class LotteryBall extends Component {
  render() {
    return (
      <div className="Ball">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default LotteryBall;
