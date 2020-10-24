let _playerScore = 0;
let _computerScore = 0;
let gameCount = 0;
const totalPlayRounds = 5;

setupGameButtons();

function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  const choices = ["Rock", "Paper", "Scissors"];

  return choices[random];
}

function game() {
  alert("The battle has started!");
  updateScores();

  setupChoiceButtons();

  displayRoundInfo();
}

function setupChoiceButtons() {
  const buttons = Array.from(document.querySelectorAll(".btn-choice"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playRound(btn.id);
    });
    btn.disabled = false;
  });
}

function setupGameButtons() {
  const startBtn = document.getElementById("btn-start");
  startBtn.addEventListener("click", game);
  const resetBtn = document.getElementById("btn-reset");
  resetBtn.addEventListener("click", resetGame);
}

function updateScores() {
  // if (didPlayerWin) _playerScore++;
  // else _computerScore++;

  const playerScore = document.getElementById("player-score");
  const computerScore = document.getElementById("computer-score");

  playerScore.textContent = "SCORE: " + _playerScore;
  computerScore.textContent = "SCORE: " + _computerScore;
}

function displayResult(gameResult) {
  const result = document.getElementById("round-result");
  result.textContent = gameResult;
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  displayRoundInfo();

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
  updateScores();

  displayResult(result);
  gameCount++;

  if (gameCount == totalPlayRounds) {
    gameOver();
  }
}

function displayRoundInfo() {
  const roundInfo = document.getElementById("round-info");
  if (gameCount == totalPlayRounds - 1) {
    roundInfo.textContent = "FINAL ROUND!";
  } else {
    roundInfo.textContent = "ROUND: " + (gameCount + 1);
  }
}

function displayFinalResult() {
  const finalResult = document.getElementById("final-result");
  const winnerResult = document.getElementById("winner-result");
  let result = `Results of this game:\nPlayer has won ${_playerScore} rounds and computer has won ${_computerScore}`;
  finalResult.textContent = result;
  let winResult = "";

  if (_playerScore == _computerScore) {
    winResult = "The final result is a Tie!";
  } else {
    if (_playerScore > _computerScore) {
      winResult += "Congratulations, you are the winner!";
    } else {
      winResult += "Too bad, robo computer wins!";
    }
  }
  winnerResult.textContent = winResult;
}

function gameOver() {
  displayFinalResult();
  disableButtons();
}

function disableButtons() {
  const buttons = Array.from(document.querySelectorAll(".btn-choice"));
  buttons.forEach((btn) => (btn.disabled = true));
}

function resetGame() {
  _playerScore = 0;
  _computerScore = 0;
  gameCount = 0;
  updateScores();
  game();
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
