import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Languages from "./components/Languages";
import { languages } from "./languages";
import { clsx } from "clsx";

function App() {
  //State Values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Static Value
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;

  const isGameOver = isGameWon || isGameLost;

  const letterElements = currentWord.split("").map((letter, index) => {
    return (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        onClick={() => addGuessedLetter(letter)}
        key={letter}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <Header />
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">
        <Languages languages={languages} wrongGuessCount={wrongGuessCount} />
      </section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}

export default App;
