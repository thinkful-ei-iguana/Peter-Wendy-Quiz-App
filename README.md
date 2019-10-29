

function generateQuiz(){} --> adds start page html, including START button
function startQuiz() {}  --> on click of start, display first question and score
    function askAQuestion() {} --> should be called when clicking next button
        function generateAQuestion(question) {} --> renders html for question form
function updateQuestionNumber(){} --> currentQuestion++ every question so that askAQuestion() asks right question
function updateScore(){} --> score++ for every CORRECT question

function submitAnswer(){} (how do i check if a radio button is checked in jquery) 
    if correct, run correctAnswer
    if wrong, run wrongAnswer
     let selected = $('input:checked');
    let answer = selected.val();
    let correct = STORE[questionNumber].correctAnswer;
    if (answer === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
function correctAnswer(){}
function wrongAnswer(){}
function nextQuestion(){}
    update question number
    replaceWith
function reStartQuiz(){} - resets stats





//determines final score and feedback at the end of the quiz
function finalScore() {
  $('.final').show();

  const great = [
    'Great job!',
    'images/win.jpg',
    'cheering monkey',
    'You sure know a lot about monkeys!'
  ];

  const good = [
    'Good, not great.',
    'images/read.jpg',
    'monkey reading a book',
    'You should keep studying about monkeys...'
  ];

  const bad = [
    'Do you even know what monkeys look like?',
    'images/end.png',
    'cat in a monkey costume',
    'Or are you more of a cat person?'
  ];

  if (score >= 8) {
    array = great;
  } else if (score < 8 && score >= 5) {
    array = good;
  } else {
    array = bad;
  }
  return $('.final').html(
    `<h3>${array[0]}</h3>
      <img src="${array[1]}" alt="${array[2]}" class="images">
        <h3>Your score is ${score} / 10</h3>
        <p class="sizeMe">${array[3]}</p>
        <button type="submit" class="restartButton button">Restart</button>`
  );
}

//takes user back to the starting view to restart the quiz
function restartQuiz() {
  $('.jungleBox').on('click', '.restartButton', function (event) {
    event.preventDefault();
    resetStats();
    $('.altBox').hide();
    $('.startQuiz').show();
  });
}

//runs the functions
function makeQuiz() {
  startQuiz();
  generateQuestion();
  submitAnswer();
  nextQuestion();
  restartQuiz();
}

$(makeQuiz);
