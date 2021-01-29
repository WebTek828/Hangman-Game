import React, { Component } from "react";

import "./game.css";
import Alphabets from "../../components/Alphabets/Alphabets";
import GuessedWordsDisplay from "../../components/GuessedWordsDisplay/GuessedWordsDisplay";
import Win from "../../components/Win/Win";

class Game extends Component {
  words = "swear heart love compassion guy lady".split(" ");

  state = {
    word: "",
    guessedWords: [],
    win: false,
    showWinningMsg: false,
  };

  componentDidMount() {
    const rn = Math.floor(Math.random() * this.words.length);
    const guessedWords = [...Array(this.words[rn].length)];
    this.setState({ word: this.words[rn], guessedWords });
  }

  closeModalHandler = () => {
    this.setState({ showWinningMsg: false });
  };

  guessedWordsHandler = (word, index) => {
    setTimeout(() => {
      const guessedWords = [...this.state.guessedWords];
      guessedWords[index] = word;
      this.setState({ guessedWords });
      if (
        JSON.stringify(this.state.word.split("")) ===
        JSON.stringify(this.state.guessedWords)
      ) {
        this.setState({ win: true, showWinningMsg: true });
      }
    }, 200);
  };

  render() {
    return (
      <>
        <Win
          showWinningMsg={this.state.showWinningMsg}
          closeModal={this.closeModalHandler}
        />
        <div className="container">
          <GuessedWordsDisplay
            quiz={this.state.word}
            guessedWords={this.state.guessedWords}
          />
          <Alphabets
            guessedWords={(word, index) =>
              this.guessedWordsHandler(word, index)
            }
            quiz={this.state.word}
          />
        </div>
      </>
    );
  }
}

export default Game;
