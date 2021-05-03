import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    let nums = ["one", "two", "three", "four", "five", "six"];
    let num = nums[this.props.value - 1];
    let className = `fas fa-dice-${num} Die`;
    return <i className={className}></i>;
  }
}
export default Die;
