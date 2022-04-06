// Build Global Variable
var timerEl = document.getElementById('starting');
var correctEl = document.getElementById("correct");
var startEl = document.getElementById("startButton");
var questionsDiv = document.querySelector("questions")

//have a place for the array to go into 
var currentIndex = [];
var answerIndex = [];

//build an array index for questions
var myQuestions = [
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
      correct: "Parmesan"
    },
    {
      question: "'Focaccia' is a type of what?",
      answer1: "Bread", 
      answer2: "Meat", 
      answer3: "Cheese", 
      answer4: "Pasta",
      correct: "Bread"
    },
    {
      question: "'Focaccia' is a type of what?",
      answer1: "Bread", 
      answer2: "Meat", 
      answer3: "Cheese", 
      answer4: "Pasta",
      correct: "Bread"
    },
    ];

// User = click button for game to start
//timer starts when the button is clicked
 // Timer 
  //timer starts at 60s
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
//array begins to cycle as soon as beginning button is pressed - for loop
//Don't know if intro page needs to be in array...not sure if I need to hide the title div or cycle it through


//create array for connecting questions and answers
function showQuestions () {
    var currentQuestion = myQuestions[currentIndex];
    var questionShown = currentQuestion.question;

    var answerOptions = currentQuestion.answers;
    var answer0 = answerIndex['answer1']
    var answer1 = answerIndex['answer2']
    var answer2 = answerIndex['answer3']
    var answer3 = answerIndex['answer4']
    var correctAnswer = answerOptions["correct"]

    //display answers in the current index

}



//function playingGame
function playGame () {
  //when the timer starts, the first question is displayed
  //if the answer is correct = "Correct!" is displayed and the next question is asked
  if (correctEl === true) {
    //create variable for "correct"
     correctEl.textContent("Correct!")
     questionIndex++
       
 } else {
      //if correct answer === false then player loses 10 seconds of their time
     //.textContent("Sorry...)
     timeLeft-=10;
 }

}





//if I chose an array
startEl.addEventListener("click", startArray)

var startArray = myQuestions.textContent(question(0))



function startArray(questionIndex) {
    myQuestionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i <myQuestions.length; i++) {
      var userQuestion = myQuestions[questionIndex].question;
      var userChoices = myQuestions[questionIndex].answer[i];

      
    }
  };

//push questions into questionIndex
questionIndex.push(...question[i]);
//push choices into choiceIndex
choiceIndex.push(...answer[i]);

     //when question0 is pushed into questionIndex
     //do corresponding answers get pushed into as well?

//For correct answers ==> create if then statements and label correct answers as "correct"
//make if then statement for next question

if (correctEl === true) {
   //create variable for "correct"
    correct.textContent("Correct!")
    questionIndex++
   
} else {
     //if correct answer === false then player loses 10 seconds of their time
    //.textContent("Sorry...)
    timeLeft-=10;
}



//if correct answer = true then nothing happens


//at the end of the game, player gets to input their score - which is equal to the amount of time remaining
function endgame () {
    gameDiv.setAttribute("class", "hide")
    congratsDiv.setAttribute("class", "")
    if (timeLeft === 0) {
        clearInterval(timeLeft)
    }
    points = 0;
    localStorage.setItem("points", 0)
}
//href new page for high scores