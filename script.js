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
var submitBtn = document.getElementById("submit")

// var questionsDiv = document.querySelector("questions")
var answers = document.querySelectorAll(".btn")

var hideContainer = document.querySelector("container")

var highScores = JSON.parse(localStorage.getItem("scores"))

if (highScores) {
  var scoresArray = highScores
} else {
  var scoresArray = []
}

//final scores array

// User = click button for game to start
//timer starts when the button is clicked
 // Timer 
  //timer starts at 60s
 timeLeft = 60;

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

  var answeredQuestion1 = function(){
    if (this.id == "btn2"){
      console.log("Correct")
      startQuestion2()
    } else {
      console.log("Wrong")
      timeLeft -= 10;
      startQuestion2()
    }
  }
  for (let i = 0; i < 4; i++) {
    let answer = answers[i]
    answer.addEventListener("click", answeredQuestion1)
  }
  }; 


startEl.addEventListener("click", startQuestion1)



// Question2!!

function startQuestion2() {
  //hide this block
  document.querySelector("#question1").classList.add("hide");
  //display question1
  document.querySelector("#question2").classList.remove("hide");

  var answeredQuestion2 = function(){
    if (this.id == "btn5"){
      console.log("Correct")
      startQuestion3()
    } else {
      console.log("Wrong")
      timeLeft -= 10;
      startQuestion3()
    }
  }
  for (let i = 5; i < 8; i++) {
    let answer = answers[i]
    answer.addEventListener("click", answeredQuestion2)
  }
}; 


// Question3!!!
function startQuestion3() {
  //hide this block
  document.querySelector("#question2").classList.add("hide");
  //display question1
  document.querySelector("#question3").classList.remove("hide");

  var answeredQuestion3 = function(){
    if (this.id == "btn10"){
      console.log("Correct")
      startQuestion4()
    } else {
      console.log("Wrong")
      timeLeft -= 10;
      startQuestion4()
    }
  }
  for (let i = 9; i < 12; i++) {
    let answer = answers[i]
    answer.addEventListener("click", answeredQuestion3)
  }
}; 

// Question4!!!!
function startQuestion4() {
  //hide this block
  document.querySelector("#question3").classList.add("hide");
  //display question1
  document.querySelector("#question4").classList.remove("hide");

  var answeredQuestion4 = function(){
    if (this.id == "btn15"){
      console.log("Correct")
      endGame()
    } else {
      console.log("Wrong")
      timeLeft -= 10;
      endGame()
    }
  }
  for (let i = 13; i < 16; i++) {
    let answer = answers[i]
    answer.addEventListener("click", answeredQuestion4)
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

  if (timeLeft === 0) {
    resultsText.textContent = "Your final score is 0";
  } else {
    resultsText.textContent = "Your final score is " + timeLeft;
  }
  // console.log("initialsText", initialsText)

};

submitBtn.addEventListener("click", function(){
  var initials = document.getElementById("initials")
  var initialsText = initials.value
  console.log(initialsText)
  scoresArray.push(initialsText + ":" + timeLeft)
  localStorage.setItem("scores", JSON.stringify(scoresArray))
  location.replace("./results.html")
})