import { Component } from "react";
import ColorBox from "./ColorBox";
import "./Boxes.css";
class Boxes extends Component {
  render() {
    let boxes = [];
    for (let i = 0; i < this.props.boxes; i++) {
      boxes.push(<ColorBox />);
    }
    return <div className="Boxes">{boxes}</div>;
  }
}

export default Boxes;
