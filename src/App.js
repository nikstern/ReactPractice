import "./styles.css";
import { choice, remove } from "./Section4/helpers";
import foods from "./Section4/foods";
export class App extends React.Component {
  render() {
    const myFood = choice(foods);
    return (
      <div className="App">
        <p> I'd like one {myFood} please </p>
        <p> Here you go: {myFood} </p>
        <p> Delicious, may I have another </p>
        <p> Sorry we only have {remove(foods, myFood).join(" ")} left </p>
      </div>
    );
  }
}
