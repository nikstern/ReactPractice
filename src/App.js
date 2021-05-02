import "./styles.css";
import Pokecard from "./Section5/Pokecard";
export class App extends React.Component {
  render() {
    return <Pokecard id={1} name="Bulbasaur" type="Grass" exp={3} />;
  }
}
