import React, { Component } from "react";
import "./Pokecard.css";

function numpad(num) {
  let string = num.toString();
  while (string.length < 3) {
    string = "0" + string;
  }
  return string;
}

class Pokecard extends Component {
  render() {
    const pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numpad(
      this.props.id
    )}.png`;
    const cardClass = `Pokecard ${this.props.type}`;
    const imgClass = `Pokecard-img ${this.props.type}-img`;
    return (
      <div className={cardClass}>
        <header className="Pokecard-header">
          <h2 className="Pokecard-name">{this.props.name}</h2>
        </header>
        <img src={pokeImg} className={imgClass} alt={this.props.name} />
        <footer className="Pokecard-footer">
          <span className="Pokecard-exp">{this.props.exp} XP </span>
        </footer>
      </div>
    );
  }
}

export default Pokecard;
