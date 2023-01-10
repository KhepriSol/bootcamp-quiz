"use strict";

var form = document.getElementById("Pokemon");
var startButton = document.getElementById("start-button");
var questionsContainer = document.getElementById("questions");
var gameOverForm = document.getElementById("game-over");
var timer;
var timerInterval;
var questions = [{
  text: "How many Evolutions does Eevee have?",
  choices: ["three", "five", "eight"],
  correctChoice: "eight"
}, {
  text: "who was pokemons original mascot",
  choices: ["pichu", "claifary", "charmander"],
  correctChoice: "claifary"
} //gonna add more questions
];
var currentQuestionIndex;
startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);

function startGame() {
  timer = 60;
  currentQuestionIndex = 0; // Start timer and display first question

  startTimer();
  displayQuestion();
}

function startTimer() {
  // Update timer every second
  timerInterval = setInterval(function () {
    timer--;
    timerValue.textContent = timer; // End game when or if the timer reaches 0

    if (timer <= 0) {
      endGame();
    }
  }, 1000);
}

function displayQuestion() {
  var question = questions[currentQuestionIndex]; // Clear any existing content in the questions container

  questionsContainer.innerHTML = ""; // Add the question text

  var questionElement = document.createElement("p");
  questionElement.textContent = question.text;
  questionsContainer.appendChild(questionElement); // Add the answer choices

  question.choices.forEach(function (choice) {
    var button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", selectAnswer);
    questionsContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  var selectedChoice = event.target.textContent;
  var correct = questions[currentQuestionIndex].correctChoice === selectedChoice;
}
//# sourceMappingURL=script.dev.js.map
