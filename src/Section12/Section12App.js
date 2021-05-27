import React, { Component } from "react";
import Board from "./Board";
class Section12App extends Component {
  render() {
    return <Board rows={5} columns={5} lightChance={0.25} />;
  }
}

export default Section12App;
