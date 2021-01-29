import React from "react";

import "./Win.css";
const Win = (props) => {
  let winningMsg;
  props.showWinningMsg
    ? (winningMsg = (
        <div onClick={props.closeModal} className="win">
          <div className="win-message">
            <h4>Congratulations!You win</h4>
            <button className="win__btn">Play again</button>
          </div>
        </div>
      ))
    : (winningMsg = null);
  return winningMsg;
};

export default Win;
