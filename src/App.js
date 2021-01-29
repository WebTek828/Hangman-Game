import React, { Component } from "react";
import "./App.css";

import Game from "./containers/game/game";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Game />
      </div>
    );
  }
}

export default App;
