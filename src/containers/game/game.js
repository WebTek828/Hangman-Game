import React, { Component } from "react";

import "./game.css";
import Alphabets from "../../components/Alphabets/Alphabets";
import GuessedWordsDisplay from "../../components/GuessedWordsDisplay/GuessedWordsDisplay";
import randomWords from "random-words";
import Win from "../../components/Win/Win";
import img0 from "../../images/0.jpg";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";

class Game extends Component {
  randomWord = () => {
    return randomWords();
  };
  imgs = [img0, img1, img2, img3, img4, img5, img6];
  state = {
    word: "",
    guessedWords: [],
    win: false,
    curState: 0,
    lose: false,
  };
  useRandomWord = this.randomWord();

  componentDidMount() {
    const guessedWords = [...Array(this.useRandomWord.length)];
    this.setState({ word: this.useRandomWord, guessedWords });
  }

  guessedWordsHandler = (word, index) => {
    setTimeout(() => {
      const guessedWords = [...this.state.guessedWords];
      guessedWords[index] = word;
      this.setState({ guessedWords });
      if (
        JSON.stringify(this.state.word.split("")) ===
        JSON.stringify(this.state.guessedWords)
      ) {
        setTimeout(() => {
          this.setState({ win: true, showWinningMsg: true });
        }, 500);
      }
    }, 200);
  };

  hangmanHandler = () => {
    this.setState({ curState: this.state.curState + 1 });
  };

  loseGameHandler = () => {
    this.setState({ lose: true });
  };

  playAgainHandler = () => {
    const btns = document.querySelectorAll(".alphabet");
    btns.forEach((btn) => {
      btn.disabled = false;
    });
    const randomWord = this.randomWord();
    const guessedWords = [...Array(randomWord.length)];
    this.setState({
      word: randomWord,
      guessedWords,
      win: false,
      lose: false,
      curState: 0,
    });
  };

  render() {
    return (
      <>
        <Win
          textMsg="Congratulations!You win."
          win={this.state.win}
          playAgain={this.playAgainHandler}
        />
        <Win
          textMsg={`You lose the game.The word is "${this.state.word}"`}
          win={this.state.lose}
          playAgain={this.playAgainHandler}
        />
        <div className="container">
          <img src={this.imgs[this.state.curState]} alt="hangman-state" />
          <GuessedWordsDisplay
            quiz={this.state.word}
            guessedWords={this.state.guessedWords}
          />
          <Alphabets
            loseGame={this.loseGameHandler}
            hangman={() => this.hangmanHandler()}
            curState={this.state.curState}
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
