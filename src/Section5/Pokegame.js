import React, { Component } from "react";
import "./Pokegame.css";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  render() {
    let { pokemon } = this.props;
    let firstGroup = [];
    let firstScore = 0;
    while (firstGroup.length < 4) {
      let randPok = pokemon[Math.floor(Math.random() * pokemon.length)];
      if (firstGroup.indexOf(randPok) === -1) {
        firstGroup.push(randPok);
        firstScore += randPok.base_experience;
      }
    }
    let secondGroup = [];
    secondGroup = pokemon.filter((p) => firstGroup.indexOf(p) === -1);
    let secondScore = 0;
    secondGroup.forEach((p) => (secondScore += p.base_experience));

    let winning, losing, winningScore, losingScore;
    if (secondScore > firstScore) {
      winning = secondGroup;
      winningScore = secondScore;
      losing = firstGroup;
      losingScore = firstScore;
    } else {
      winning = firstGroup;
      winningScore = firstScore;
      losing = secondGroup;
      losingScore = secondScore;
    }
    return (
      <div>
        <h1>Winning Team: {winningScore}</h1>
        <Pokedex pokemon={winning} />
        <h1>Losing Team: {losingScore}</h1>
        <Pokedex pokemon={losing} />
      </div>
    );
  }
}

export default Pokegame;
