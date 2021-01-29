import React from "react";

import "./Alphabets.css";

const Alphabets = (props) => {
  const alphabets = "abcdefghijklnmopqrstuvwhyz".split("");

  const guessingHandler = (e) => {
    e.target.disabled = true;

    const domText = e.target.innerText;
    const quizWord = props.quiz.split("");

    const loseFunc = () => {
      if (!quizWord.some((w) => w === domText)) {
        props.hangman();
      }
    };

    if (props.curState === 5) {
      setTimeout(() => {
        props.loseGame();
      }, 400);
      loseFunc();
      return;
    }
    quizWord.forEach((w, i) => {
      if (e.target.innerText === w) {
        props.guessedWords(w, i);
      }
      loseFunc();
    });
  };
  const alphabetsOutput = alphabets.map((alphabet, i) => {
    return (
      <button onClick={guessingHandler} key={i} className="alphabet">
        {alphabet}
      </button>
    );
  });

  return <div className="alphabets">{alphabetsOutput}</div>;
};

export default Alphabets;
