"use strict";

var form = document.getElementById(quiz);
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {// start the quiz
});
form.addEventListener("submit", function (event) {
  event.preventDefault(); //Prevents the form from submitting//
  //selected options for each question//

  var question1 = form.nextElements.question1;
  var question2 = form.elements.question2; //add more pokemon questions etc
  //check if the selected options are correct

  if (question1.value === "A") {//correct answer
  } else {//incorrect answer//
    }

  if (question2.value === "A") {//correct answer
  } else {} //incorrect answer//
    //more questions

});
//# sourceMappingURL=function.dev.js.map
