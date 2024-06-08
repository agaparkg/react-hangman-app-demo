import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* <span className="letter">a</span>
      <span className="letter">a</span>
      <span className="letter">a</span> */}
      {selectedWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
