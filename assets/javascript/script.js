//* Defined Variables
var startButton = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerElement = document.getElementById('timer');
var currentQuestionIndex = 0;
var time = 60;
var timer;

//* Quiz question flow/conclusion
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

//* Start Button Functionality
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

//* Quiz Timer Function
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

//* Quiz Question/Answer display functionality
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

//* Quizz questions/answers
var questions = [

{
    question: 'Which method combines the text of two strings and returns a new string?',
    answers: [
        {text: 'concat()', correct: true },
        {text: 'append()', correct: false },
        {text: 'attach()', correct: false },
        {text: 'none of these', correct: false }
    ]
},
{
    question: 'Which function causes a string to be displayed in a specified size?',
    answers: [
        {text: 'fixed()', correct: false },
        {text: 'fontcolor()', correct: false },
        {text: 'fontsize()', correct: true },
        {text: 'bold()', correct: false }
    ]
},
{
    question: 'Where should you link the JavaScript within the HTML?',
    answers: [
        {text: 'before the body', correct: false },
        {text: 'at the end of the body', correct: true },
        {text: 'within the header', correct: false },
        {text: 'in the footnote', correct: false }
    ]
},
{
    question: 'What is JavaScript used for?',
    answers: [
        {text: 'content of webpage', correct: false },
        {text: 'license of content', correct: false },
        {text: 'style of content', correct: false },
        {text: 'functionality of content', correct: true }
    ]
},
{
    question: 'What is a free front-end framework for web development?',
    answers: [
        {text: 'Sneakerlace', correct: false },
        {text: 'Bootstrap', correct: true },
        {text: 'FunctionFarm', correct: false },
        {text: 'GoogleFunction', correct: false }
    ]
},
{
    question: 'What is a popular JavaScript library?',
    answers: [
        {text: 'jQuery', correct: true },
        {text: 'zFactory', correct: false },
        {text: 'kList', correct: false },
        {text: 'tHub', correct: false }
    ]
},
]