var timerEl = document.getElementById('starting');
var correctEl = document.getElementById("correct");
var startEl = document.getElementById("startButton");
var container = document.querySelector("questions")

//make array for questions being held in queue
var questions = [
{ 
  question: "What year was the first pizza made?",
  answer1: "1902",
  answer2: "1899",
  answer3: "1836",
  answer4: "1789",
  correct: "1899"
},
{
  question: "What does 'tiramisu' mean?",
  answer1: "Pick me up",
  answer2: "Wake me up",
  answer3: "Shake me up",
  answer4: "Bake me up",
  correct: "Shake me up"
},
{
  question: "Which of the following is not in an ingredient of pesto?",
  answer1: "Parmesan cheese", 
  answer2: "Black olives", 
  answer3: "Basil", 
  answer4: "Olive oil",
  answer: "Parmesan"
},
{
  question: "'Focaccia' is a type of what?",
  answer1: "Bread", 
  answer2: "Meat", 
  answer3: "Cheese", 
  answer4: "Pasta",
  answer: "Bread"
},
{
  question: "'Focaccia' is a type of what?",
  answer1: "Bread", 
  answer2: "Meat", 
  answer3: "Cheese", 
  answer4: "Pasta",
  answer: "Bread"
},
];

var questionsQueue = [];
var score = 0
//when an incorrect answer is chosen; user loses 10 seconds
var incorrectAnswer = 10;

//timer starts when the beginning button is pressed
timeLeft = 20;

startEl.addEventListener("click", countdown)

  function countdown() {
        //when the button is clicked, the timer will start

        var timeInterval = setInterval(function () {
          // As long as the `timeLeft` is greater than 1, display = seconds are plural
          if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        // As long as the `timeLeft` is equal to 1, display = seconds are singular
          } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
            //when the time is at 0, the timer is up and the timer stops
          } else {
            timerEl.textContent = 'Time is up!';
            clearInterval(timeInterval);
          }
        }, 1000);
      }
    //displays timer!

//get section 
//put questions and choices to page:
questions.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".questions")) {
    var state = element.getAttribut("data-state");
    
    if (state === "hidden") {
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";
   
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      element.textContent= "";
      // Use .setAttribute() method
      element.setAttribute("data-state", "hidden")
     
    }  
  }
});



// timerElement1 = timeLeft
//if wrong button is pressed, then time function correctAnswer () {
function wrongAnswer () {    
if (correctEl === false) {
        startingClock -10;
        wrongAnswer.textContent("Wrong")
    } else {
      wrongAnswer.textContent("Correct!")
    }
};

//if correct answer is pressed, time is untouched

//When answer is given - correct answer = move to next question - incorrect answer = time deduction

//High scores are stored in localStorage
    //user must input name
    //Input saves to local storage
    function saveData () {
    localStorage.setItem("timeRemaining", timeLeft)
    var timeRemaining = localStorage.getItem("timeRemaining")
    console.log(timeRemaining);
    }

    //create a running total
