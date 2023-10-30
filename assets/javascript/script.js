var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerElement = document.getElementById('timer');
var currentQuestionIndex = 0;
var time = 60;
var timer;

startButton.addEventListener('click', startQuiz);
answerButtonsElement.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn')) return;
  var selectedAnswer = e.target;
  var correct = selectedAnswer.dataset.correct;
  if (correct) {
    if (questions.length > currentQuestionIndex + 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
    } else {
      finishQuiz();
    }
  } else {
    time -= 10;
    if (time < 0) time = 0;
    updateTimer();
  }
});

function startQuiz() {
  startButton.classList.add('hide');
  currentQuestionIndex = 0;
  time = 60;
  updateTimer();
  questions.sort(() => Math.random() - 0.5);
  questionContainer.classList.remove('hide');
  showQuestion(questions[currentQuestionIndex]);
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    time--;
    updateTimer();
    if (time <= 0) {
      finishQuiz();
    }
  }, 1000);
}

function updateTimer() {
  timerElement.textContent = `Time: ${time}s`;
}

function finishQuiz() {
  clearInterval(timer);
  startButton.innerText = 'Restart';
  startButton.classList.remove('hide');
  questionContainer.classList.add('hide');
}

function showQuestion(question) {
  resetState();
  questionElement.innerText = question.question;
  question.answers.forEach(function (answer) {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  answerButtonsElement.innerHTML = '';
}

var questions = [

{
    question: 'What is my name?',
    answers: [
        {text: 'Nikki', correct: true },
        {text: 'Ryan', correct: false },
        {text: 'Mark', correct: false },
        {text: 'Kevin', correct: false }
    ]
},
{
    question: 'What is 2+2?',
    answers: [
        {text: '6', correct: false },
        {text: '8', correct: false },
        {text: '4', correct: true },
        {text: '3', correct: false }
    ]
},
{
    question: 'What is the best fast food chain?',
    answers: [
        {text: 'McDonalds', correct: false },
        {text: 'InNOut', correct: true },
        {text: 'Five Guys', correct: false },
        {text: 'Taco Bell', correct: false }
    ]
},
{
    question: 'What is my favorite color?',
    answers: [
        {text: 'Yellow', correct: false },
        {text: 'Red', correct: false },
        {text: 'Blue', correct: false },
        {text: 'Green', correct: true }
    ]
},
{
    question: 'What is the capital of Georgia?',
    answers: [
        {text: 'Raleigh', correct: false },
        {text: 'Atlanta', correct: true },
        {text: 'NewYork', correct: false },
        {text: 'Cleveland', correct: false }
    ]
},
{
    question: 'Whats for dinner?',
    answers: [
        {text: 'Soup', correct: true },
        {text: 'Pizza', correct: false },
        {text: 'Tacos', correct: false },
        {text: 'Pasta', correct: false }
    ]
},



]