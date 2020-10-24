let _playerScore = 0;
let _computerScore = 0;
let gameCount = 0;

setupGameButtons();

function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  const choices = ["Rock", "Paper", "Scissors"];

  return choices[random];
}

function game() {
  let playRounds = 5;

  alert("The battle has started!");
  setScore();

  setupChoiceButtons();

  displayRoundInfo();

  // alert(
  //   `Results of this game:\nPlayer has won ${playerScore} rounds and computer has won ${computerScore}`
  // );

  // if (_playerScore == _computerScore) {
  //   alert("The final result is a Tie!");
  // } else {
  //   if (_playerScore > _computerScore) {
  //     alert("Congratulations, you are the winner!");
  //   } else {
  //     alert("Too bad, computer wins!");
  //   }
  // }
}

function setupChoiceButtons() {
  const buttons = Array.from(document.querySelectorAll(".btn-choice"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playRound(btn.id);
    });
  });
}

function setupGameButtons() {
  const startBtn = document.getElementById("btn-start");
  startBtn.addEventListener("click", game);
  const resetBtn = document.getElementById("btn-reset");
  resetBtn.addEventListener("click", resetGame);
}

function setScore(didPlayerWin) {
  // if (didPlayerWin) _playerScore++;
  // else _computerScore++;

  const playerScore = document.getElementById("player-score");
  const computerScore = document.getElementById("computer-score");

  playerScore.textContent = "SCORE: " + _playerScore;
  computerScore.textContent = "SCORE: " + _computerScore;
}

function displayResult(gameResult) {
  const result = document.getElementById("result");
  result.textContent = gameResult;
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  let result;
  `You Win! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection == computerSelection) {
    result = `You have both selected ${playerSelection}, it's a Tie!`;
    console.log(result);
  } else {
    if (isPlayerWinner(playerSelection, computerSelection)) {
      result = `You Win! ${playerSelection} beats ${computerSelection}`;
      console.log(result);
      _playerScore++;
    } else {
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      console.log(result);
      _computerScore++;
    }
  }
  setScore();

  displayResult(result);
  gameCount++;
}

function displayRoundInfo() {
  const roundInfo = document.getElementById("round-info");
  if (gameCount == 5) {
    roundInfo.textContent = "FINAL ROUND!";
  } else {
    roundInfo.textContent = "ROUND: " + gameCount;
  }
}

function resetGame() {
  _playerScore = 0;
  _computerScore = 0;
  gameCount = 0;
  setScore();
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
