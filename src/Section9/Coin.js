import { Component } from "react";
import "./Coin.css";
class Coin extends Component {
  render() {
    let src;
    let heads_src = `https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg`;
    let tails_src = `https://tricksupply.com/wp-content/uploads/2019/10/s-l1600.jpg`;
    if (this.props.side === "heads") {
      src = heads_src;
    } else {
      src = tails_src;
    }
    return (
      <img
        src={src}
        onClick={this.props.onClick}
        alt={`Dime ${this.props.side}`}
      />
    );
  }
}

export default Coin;
