import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;
    const cardClass = `Pokecard ${this.props.type}`;
    const imgClass = `Pokecard-img ${this.props.type}-img`;
    return (
      <article className={cardClass}>
        <header className="Pokecard-header">
          <h2 className="Pokecard-name">{this.props.name}</h2>
        </header>
        <img src={pokeImg} className="Pokecard-img Grass-img" />
        <footer className="Pokecard-footer">
          <span className="Pokecard-type">{this.props.type} Type</span>
          <span className="Pokecard-exp">{this.props.exp} XP </span>
        </footer>
      </article>
    );
  }
}

export default Pokecard;
