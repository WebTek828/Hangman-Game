import React from "react";

import "./GuessedWordsDisplay.css";

const GuessedWordsDisplay = (props) => {
  let quizOutput;
  console.log(props.quiz);

  if (props.quiz.length > 0) {
    quizOutput = props.guessedWords.map((l, i) => {
      return (
        <span key={i} className="word">
          {l ? l : "_______"}
        </span>
      );
    });
  } else {
    quizOutput = null;
  }

  return <div className="quiz">{quizOutput}</div>;
};

export default GuessedWordsDisplay;
