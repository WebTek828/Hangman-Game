import React from "react";

import "./GuessedWordsDisplay.css";

const GuessedWordsDisplay = (props) => {
  console.log(props.quiz);
  let quizOutput;
  if (props.quiz.length > 0) {
    quizOutput = [...Array(props.quiz.length)].map((l, i) => {
      return <span key={i} className="word"></span>;
    });
  } else {
    quizOutput = null;
  }

  return <div className="quiz">{quizOutput}</div>;
};

export default GuessedWordsDisplay;
