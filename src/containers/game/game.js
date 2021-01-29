import React, { Component } from "react";

import "./game.css";
import Alphabets from "../../components/Alphabets/Alphabets";

class Game extends Component {
  render() {
    return (
      <div className="container">
        <Alphabets />
      </div>
    );
  }
}

export default Game;
