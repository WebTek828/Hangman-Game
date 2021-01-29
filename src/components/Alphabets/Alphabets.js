import React from "react";

import "./Alphabets.css";

const Alphabets = (props) => {
  const alphabets = "abcdefghijklnmopqrstuvwhyz".split("");

  const guessingHandler = (e) => {
    props.quiz.split("").forEach((w, i) => {
      if (e.target.innerText === w) {
        props.guessedWords(w, i);
      }
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
