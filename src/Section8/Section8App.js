import { Component } from "react";
import Lottery from "./Lottery";

class Section8App extends Component {
  render() {
    return (
      <div>
        <Lottery title="My Lottery" balls={4} />
      </div>
    );
  }
}

export default Section8App;
