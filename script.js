const form = document.getElementById("Pokemon");
const startButton = document.getElementById("start-button");
const questionsContainer = document.getElementById("questions");
const gameOverForm = document.getElementById("game-over");

let timer;
let timerInterval;
let questions = [
  {
    text: "How many Evolutions does Eevee have?",
    choices: ["three", "five", "eight"],
    correctChoice: "eight",
  },
  {
    text: "who was pokemons original mascot",
    choices: ["pichu", "claifary", "charmander"],
    correctChoice: "claifary",
  },
  //gonna add more questions
];
let currentQuestionIndex;

startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);

function startGame() {
  timer = 60;
  currentQuestionIndex = 0;

    // Start timer and display first question
    startTimer();
    displayQuestion();
  }

  function startTimer() {
    // Update timer every second
    timerInterval = setInterval(() => {
      timer--;
      timerValue.textContent = timer;
  
      // End game when or if the timer reaches 0
      if (timer <= 0) {
        endGame();
      }
    }, 1000);
  }

  