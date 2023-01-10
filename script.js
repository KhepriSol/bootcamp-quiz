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



startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);



function startTimer() {
  // Update timer every second
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = `Time: ${timer}`;
       // End game if timer reaches 0
       if (timer <= 0) {
        endGame();
      }
    }, 1000);
  }