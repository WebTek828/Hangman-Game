import React from "react";

import "./Alphabets.css";

const Alphabets = (props) => {
  const alphabets = "abcdefghijklnmopqrstuvwhyz".split("");

  const alphabetsOutput = alphabets.map((alphabet) => {
    return <button className="alphabet">{alphabet}</button>;
  });

  return <div className="alphabets">{alphabetsOutput}</div>;
};

export default Alphabets;
