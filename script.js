const form = document.getElementById("Pokemon");
const startButton = document.getElementById("start-button");
const questionsContainer = document.getElementById("questions");
const gameOverForm = document.getElementById("game-over");

let timer;
let questions;


startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);

