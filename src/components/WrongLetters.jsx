import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  const wlLength = wrongLetters.length;

  return (
    <div className="wrong-letters-container">
      {/* <div>{wrongLetters.length > 0 ? <p>Wrong Guesses: 5</p> : null}</div> */}
      <div>
        {wlLength > 0 && <p>Wrong Guesses: {wlLength}</p>}
        {wrongLetters.map((wl, index) => {
          return <span key={index}>{wl}, </span>;
        })}
      </div>
    </div>
  );
};

export default WrongLetters;
