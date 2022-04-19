// Selectors
var timerEl = document.getElementById('starting');
var correctEl = document.getElementById("correct");
var startEl = document.getElementById("startButton");
var questionText = document.getElementById("title-text")
var answerText = document.getElementById("box-text")
var list = document.getElementById("quiz-content")
var quizContent = document.getElementById("quiz-content")
var contextBox = document.getElementsByClassName("content-box")
var results = document.getElementById("results")
var resultsText = document.getElementById("timeRemaining")

// var questionsDiv = document.querySelector("questions")
var answers = document.querySelectorAll(".btn")

var hideContainer = document.querySelector("container")

// User = click button for game to start
//timer starts when the button is clicked
 // Timer 
  //timer starts at 60s
 timeLeft = 20;

 function countdown() {
       //when the button is clicked, the timer will start
       var timeInterval = setInterval(function () {
         // As long as the `timeLeft` is greater than 1, display = seconds are plural
         if (timeLeft > 1) {
           timerEl.textContent = timeLeft + ' seconds remaining';
           timeLeft--;
       // As long as the `timeLeft` is equal to 1, display = seconds are singular
         } else if (timeLeft === 1) {
           timerEl.textContent = timeLeft + ' second remaining'
           ;
           timeLeft--;
           //when the time is at 0, the timer is up and the timer stops
         } else {
           timerEl.textContent = 'Time is up!';
           clearInterval(timeInterval);
           //if timer runs out before end of quiz
         }
       }, 1000);
     }

startEl.addEventListener("click", countdown)

// Question 1!
function startQuestion1() {
  //hide this block
  document.querySelector("#contentTitle").classList.add("hide");
  //display question1
  document.querySelector("#question1").classList.remove("hide");

  var answeredQuestion = function(){
    if (this.id == "btn2"){
      console.log("Correct")
      startQuestion2
    } else {
      console.log("Wrong")
      timeLeft -= 10;
      startQuestion2
    }
  }
  for (let i = 0; i < 4; i++) {
    let answer = answers[i]
    answer.addEventListener("click", answeredQuestion)
  }
  }; 


startEl.addEventListener("click", startQuestion1)



// Question2!!

function startQuestion2() {
  //hide this block
  document.querySelector("#question1").classList.add("hide");
  //display question1
  document.querySelector("#question2").classList.remove("hide");

  var answeredQuestion = function(){
    if (this.id == "btn2"){
      console.log("Correct")
      startQuestion2
    } else {
      console.log("Wrong")
      timeLeft -= 10;
      startQuestion2
    }
  }
  for (let i = 5; i < 8; i++) {
    let answer = answers[i]
    answer.addEventListener("click", answeredQuestion)
  }
}; 


// Question3!!!
function startQuestion3() {
  //hide this block
  document.querySelector("#question2").classList.add("hide");
  //display question1
  document.querySelector("#question3").classList.remove("hide");

  if (document.getElementById("btn9").onclick = startQuestion4) {
  } else {
    timeLeft -= 10;
    startQuestion4();
  }
}; 

// Question4!!!!
function startQuestion4() {
  //hide this block
  document.querySelector("#question3").classList.add("hide");
  //display question1
  document.querySelector("#question4").classList.remove("hide");

  if (document.getElementById("btn15").onclick = endGame) {
    console.log("Correct");
  } else {
    console.log("Wrong");
    timeLeft -= 10;
    clearInterval(timeInterval);
    endGame();
  }
}; 

function endGame() {
  //hide this block
  document.querySelector("#question1").classList.add("hide");
  document.querySelector("#question2").classList.add("hide");
  document.querySelector("#question3").classList.add("hide");
  document.querySelector("#question4").classList.add("hide");
  //display question1
  document.querySelector("#results").classList.remove("hide");

  if (timeLeft = 0) {
    resultsText.textContent = "Your final score is 0";
  } else {
    resultsText.textContent = "Your final score is " + timeLeft;
    clearInterval(timeInterval);
  }

};
