import React, { Component } from "react";

import "./game.css";
import Alphabets from "../../components/Alphabets/Alphabets";
import GuessedWordsDisplay from "../../components/GuessedWordsDisplay/GuessedWordsDisplay";

class Game extends Component {
  words = "swear heart love compassion guy lady".split(" ");

  state = {
    word: "",
    guessedWords: [],
  };

  componentDidMount() {
    const rn = Math.floor(Math.random() * this.words.length);
    const guessedWords = [...Array(this.words[rn].length)];
    this.setState({ word: this.words[rn], guessedWords });
  }

  guessedWordsHandler = (word, index) => {
    setTimeout(() => {
      const guessedWords = [...this.state.guessedWords];
      guessedWords[index] = word;
      console.log(word);
      console.log(index);
      this.setState({ guessedWords });
    }, 200);
  };
  ssedWords;

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <GuessedWordsDisplay
          quiz={this.state.word}
          guessedWords={this.state.guessedWords}
        />
        <Alphabets
          guessedWords={(word, index) => this.guessedWordsHandler(word, index)}
          quiz={this.state.word}
        />
      </div>
    );
  }
}

export default Game;
