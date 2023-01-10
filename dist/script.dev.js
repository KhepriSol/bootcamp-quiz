"use strict";

var form = document.getElementById("Pokemon");
var startButton = document.getElementById("start-button");
var questionsContainer = document.getElementById("questions");
var gameOverForm = document.getElementById("game-over");
var timer;
var questions;
startButton.addEventListener("click", startGame);
gameOverForm.addEventListener("submit", saveScore);
//# sourceMappingURL=script.dev.js.map
