import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { selectRandomWord } from "./utils/helpers";
import "./styles.css";

function App() {
  const [selectedWord, setSelectedWord] = useState(selectRandomWord());
  // const [selectedWord, setSelectedWord] = useState("wizard");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [playable, setPlayable] = useState(true);

  // selectedWord = "application"
  // correctLetters = ['t', 'h', 'd', ...]
  // wrongLetters = ['w', 'c', 'a', ...]

  const toggleNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;
      console.log(event);

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currectLetters) => [...currectLetters, letter]);
          } else {
            // toggle notification
            toggleNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            toggleNotification();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [wrongLetters, correctLetters, playable]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);
    setSelectedWord(selectRandomWord());
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
