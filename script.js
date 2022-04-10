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

// var questionsDiv = document.querySelector("questions")
var answers = document.querySelectorAll(".btn")

var hideContainer = document.querySelector("container")

//High Score Page Elements


//Questions
// var myQuestions = [
//     { 
//       question: "What year was the first pizza made?",
//       answer1: "1902",
//       correct: "1899",
//       answer2: "1836",
//       answer3: "1789",
//     },
//     {
//       question: "What does 'tiramisu' mean?",
//       answer1: "Pick me up",
//       answer2: "Wake me up",
//       correct: "Shake me up",
//       answer3: "Bake me up",
//     },
//     {
//       question: "Which of the following is not in an ingredient of pesto?",
//       correct: "Parmesan cheese", 
//       answer1: "Black olives", 
//       answer2: "Basil", 
//       answer3: "Olive oil",
//     },
//     {
//       question: "'Focaccia' is a type of what?",
//       correct: "Bread", 
//       answer1: "Meat", 
//       answer2: "Cheese", 
//       answer3: "Pasta",
//     },
//     {
//       question: "'Focaccia' is a type of what?",
//       correct: "Bread", 
//       answer1: "Meat", 
//       answer2: "Cheese", 
//       answer3: "Pasta",
//     },
//     ];

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
         }
       }, 1000);
     }

startEl.addEventListener("click", countdown)

//Question 1!

function startQuestion1() {
  console.log("startQuestions");
  //hide this block
  document.querySelector("#contentTitle").classList.add("hide");
  //display question1
  document.querySelector("#question1").classList.remove("hide");

  if (document.getElementById("btn2").clicked = startQuestion2) {
    console.log("Correct")
  } else {
    console.log("Wrong")
    timeLeft =-10
    startQuestion2();
  }

startEl.addEventListener("click", startQuestion1)


for (let i = 0; i < 4; i++) {
  var clickButton = answers[i]
}


//Question2!!

function startQuestion2() {
  console.log("startQuestions")
  //hide this block
  document.querySelector("#question1").classList.add("hide")
  //display question1
  document.querySelector("#question2").classList.remove("hide")
}
function answerQuestion1 () {
  if (this.id == "btn5") {
    console.log("Correct")
  } else {
    console.log("Wrong")
    timeLeft =-10
  }
  startEl.addEventListener("click", startQuestion3)
} 

for (let i = 5; i < 8; i++) {
  var clickButton = answers[i]
  // answer.addEventListener("click", answerQuestion3)
}


//Question3!!!


function startQuestion3() {
  console.log("startQuestions")
  //hide this block
  document.querySelector("#question2").classList.add("hide")
  //display question1
  document.querySelector("#question3").classList.remove("hide")
}

function answerQuestion3 () {
  if (this.id == "btn9") {
    console.log("Correct")
  } else {
    console.log("Wrong")
    timeLeft =-10
  }
} 

for (let i = 9; i < 12; i++) {
  var clickButton = answers[i]
  // answer.addEventListener("click", answerQuestion1)
}

//Question4!!!!
startEl.addEventListener("click", startQuestion1)

function startQuestion4() {
  console.log("startQuestions")
  //hide this block
  document.querySelector("#question3").classList.add("hide")
  //display question1
  document.querySelector("#question4").classList.remove("hide")
}

function answerQuestion4 () {
  if (this.id == "btn2") {
    console.log("Correct")
  } else {
    console.log("Wrong")
    timeLeft =-10
  }
} 

for (let i = 13; i < 16; i++) {
  var clickButton = answers[i]
  // answer.addEventListener("click", answerQuestion1)
}

}