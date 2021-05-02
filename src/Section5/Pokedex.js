import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const listItems = this.props.pokemon.map((p, key) => (
      <Pokecard
        className="Pokedex"
        key={key}
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience}
      />
    ));
    return <div className="Pokedex-cards"> {listItems} </div>;
  }
}

export default Pokedex;
