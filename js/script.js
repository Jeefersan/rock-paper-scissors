function capitalize(input) {
  let str = input.toLowerCase();
  let firstLetter = str[0].toUpperCase();
  let subString = str.slice(1);
  return firstLetter + subString;
}

let _playerScore = 0;
let _computerScore = 0;
game();

function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  const choices = ["Rock", "Paper", "Scissors"];

  return choices[random];
}

function game() {
  let playRounds = 5;

  const playerScore = document.querySelector("player-score");
  const computerScore = document.querySelector("computer-score");

  for (let i = 0; i < playRounds; i++) {
    playerScore.textContent = "SCORE: " + _playerScore;
    computerScore = "SCORE: " + _computerScore;

    let playerInput = prompt("Enter your choice (rock, paper or scissors");
    let playerChoice = capitalize(playerInput);
    playRound(playerChoice, computerPlay());
  }

  alert(
    `Results of this game:\nPlayer has won ${playerScore} rounds and computer has won ${computerScore}`
  );

  if (playerScore == computerScore) {
    alert("The final result is a Tie!");
  } else {
    if (playerScore > computerScore) {
      alert("Congratulations, you are the winner!");
    } else {
      alert("Too bad, computer wins!");
    }
  }
}

function getPlayerChoice() {}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(`You have both selected ${playerSelection}, it's a Tie!`);
  } else {
    if (isPlayerWinner(playerSelection, computerSelection)) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    }
  }
}

function isPlayerWinner(a, b) {
  let hasPlayerWon;
  switch (a) {
    case "Rock":
      hasPlayerWon = b === "Scissors";
      break;
    case "Paper":
      hasPlayerWon = b === "Rock";
      break;
    case "Scissors":
      hasPlayerWon = b === "Paper";
      break;
    default:
      hasPlayerWon = true;
      break;
  }
  return hasPlayerWon;
}
