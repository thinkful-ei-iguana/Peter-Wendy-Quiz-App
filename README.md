Quiz App 
Submitted by Wendy Bartos (no partner)

Back of Napkin designed saved in images folder

function generateQuiz(){} --> adds start page html, including START button
function startQuiz() {}  --> on click of start, display first question and score
    function askAQuestion() {} --> should be called when clicking next button
        function generateAQuestion(question) {} --> renders html for question form
function updateQuestionNumber(){} --> currentQuestion++ every question so that askAQuestion() asks right question
function updateScore(){} --> score++ for every CORRECT question

function submitAnswer(){} 
    if correct, run correctAnswer
    if wrong, run wrongAnswer
     let selected = $('input:checked');
    let answer = selected.val();
    let correct = STORE[questionNumber].answer;
    if (answer === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
function correctAnswer(){}
function wrongAnswer(){}
function nextQuestion(){}
    update question number
function reStartQuiz(){} - resets stats on restart quiz button click 