import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Languages from "./components/Languages";
import { languages } from "./languages";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 *
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
 */

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const lettersElementsButtons = alphabet.split("").map((letter) => (
    <button onClick={() => addGuessedLetter(letter)} key={letter}>
      {letter.toUpperCase()}
    </button>
  ));

  return (
    <main>
      <Header />
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">
        <Languages languages={languages} />
      </section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{lettersElementsButtons}</section>
    </main>
  );
}

export default App;
