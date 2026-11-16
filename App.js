import React, { useState } from "react";
import Snowfall from "react-snowfall";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("Choose your move!");

  const playGame = (choice) => {
    const choices = ["Rock", "Paper", "Scissors"];
    const computer =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult("It's a Draw! 🤝");
    } else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win! 🎉");
      setUserScore((score) => score + 1);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      setResult("Computer Wins! 💻");
      setComputerScore((score) => score + 1);
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserChoice("");
    setComputerChoice("");
    setResult("Choose your move!");
  };

  return (
    <div className="app">
      <Snowfall color="#b8dfff" snowflakeCount={100} />

      <div className="game-container">
        <h1>✊ Rock Paper Scissors ✌️</h1>
        <p className="subtitle">Play With Computer!</p>

        <div className="score-board">
          <div className="score">
            <h2>{userScore}</h2>
            <p>Your Score</p>
          </div>

          <div className="score">
            <h2>{computerScore}</h2>
            <p>Computer Score</p>
          </div>
        </div>

        <h2 className="choose">Choose Your Move</h2>

        <div className="buttons">
          <button onClick={() => playGame("Rock")}>
            ✊ Rock
          </button>

          <button onClick={() => playGame("Paper")}>
            ✋ Paper
          </button>

          <button onClick={() => playGame("Scissors")}>
            ✌️ Scissors
          </button>
        </div>

        <div className="result-box">
          <p>Your Choice: {userChoice || "-"}</p>
          <p>Computer Choice: {computerChoice || "-"}</p>
          <h2>{result}</h2>
        </div>

        <button className="reset-btn" onClick={resetGame}>
          🔄 Play Again
        </button>
      </div>
    </div>
  );
}

export default App;