import React from "react";

import "./Win.css";
const Win = (props) => {
  let winningMsg;
  props.win
    ? (winningMsg = (
        <div onClick={props.playAgain} className="win">
          <div className="win-message">
            <h4>{props.textMsg}</h4>
            <button onClick={props.playAgain} className="win__btn">
              Play again
            </button>
          </div>
        </div>
      ))
    : (winningMsg = null);
  return winningMsg;
};

export default Win;
