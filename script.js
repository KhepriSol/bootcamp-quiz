const startButton = document.getElementById("start-button");
const timerValue = document.getElementById("timer-value");
const questionsContainer = document.getElementById("questions");
const gameOverForm = document.getElementById("game-over");

let timer;
let timerInterval;
let questions = [
  {
    text: "how many evolutions does eevee have?",
    choices: ["three", "eight", "five"],
    correctChoice: "eight",
  },
  {
    text: "what gen did skarmory come from?",
    choices: ["two", "three", "four"],
    correctChoice: "two",
  },
  // Add more questions here
];
let currentQuestionIndex;

startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);

function startGame() {
  // Initialize game variables
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

    // End game if timer reaches 0
    if (timer <= 0) {
      endGame();
    }
  }, 1000);
}

function displayQuestion() {
  const question = questions[currentQuestionIndex];

  // Clear any existing content in the questions container
  questionsContainer.innerHTML = "";

  // Add the question text
  const questionElement = document.createElement("p");
  questionElement.textContent = question.text;
  questionsContainer.appendChild(questionElement);

  // Add the answer choices
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", selectAnswer);
    questionsContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  const selectedChoice = event.target.textContent;
  const correct = questions[currentQuestionIndex].correctChoice === selectedChoice;

  if (correct) {
    displayMessage("Correct!");
  } else {
    displayMessage("Incorrect!");
    timer -= 15; // Subtract time for incorrect answer
  }

  // Move on to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    // End game if there are no more questions
    endGame();
  } else {
    // Otherwise, display the next question
    displayQuestion();
  }
}

function displayMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  questionsContainer.appendChild(messageElement);
}

function endGame() {
  clearInterval(timerInterval);
  timerValue.textContent = "0";
  displayMessage("Game Over!");
  gameOverForm.style.display = "block";
}

function saveScore(event) {
  event.preventDefault();

  const initials = gameOverForm.initials.value;
  const score = timer;

  // Save the score to local storage
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({ initials, score });
  localStorage.setItem("scores", JSON.stringify(scores));

  // Redirect to the high scores page
  window.location.href = "high-scores.html";
}
