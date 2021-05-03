import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  handleClick(e) {
    this.setState({ value: this.getRandomNumber(1, 10) });
  }
  render() {
    let content;
    if (this.state.value === 7) {
      content = <p>You win!</p>;
    } else {
      content = <button onClick={this.handleClick}>Random Number</button>;
    }
    return (
      <div>
        <h1>The number is {this.state.value}</h1>
        {content}
      </div>
    );
  }
}

export default Button;
