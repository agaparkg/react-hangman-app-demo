import React, { useEffect } from "react";
import { checkWinLose } from "../utils/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let status = true;

  if (checkWinLose(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 👍";
    status = false;
  } else if (
    checkWinLose(correctLetters, wrongLetters, selectedWord) === "lose"
  ) {
    finalMessage = "Unfortunately you lost. 😕. Only 6 wrong letters allowed.";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    status = false;
  }

  useEffect(() => {
    setPlayable(status);
  }, []);

  console.log(selectedWord);
  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

// btn.addEventListener('click', () => {})
// window.addEventListener('keydown', () => {})
export default Popup;
