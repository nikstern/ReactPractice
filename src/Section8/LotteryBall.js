import { Component } from "react";
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
