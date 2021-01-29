import React, { Component } from "react";

import "./game.css";
import Alphabets from "../../components/Alphabets/Alphabets";
import GuessedWordsDisplay from "../../components/GuessedWordsDisplay/GuessedWordsDisplay";

class Game extends Component {
  words = "swear heart love compassion guy lady".split(" ");

  state = {
    word: "",
  };

  componentDidMount() {
    const rn = Math.floor(Math.random() * this.words.length);
    this.setState({ word: this.words[rn] });
  }

  render() {
    return (
      <div className="container">
        <GuessedWordsDisplay quiz={this.state.word} />
        <Alphabets />
      </div>
    );
  }
}

export default Game;
