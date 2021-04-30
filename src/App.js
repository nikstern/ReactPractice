import "./styles.css";
import { Machine } from "./Section3/Machine";
export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Machine s1="X" s2="X" s3="X" />
      </div>
    );
  }
}
