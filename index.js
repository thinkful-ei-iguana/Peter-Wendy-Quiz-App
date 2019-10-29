'use strict';
//STORE stores our questions, answers, question#, score#
const STORE = {
  questions: [
    //[0] question 1
    {
      question: 'What is a root word for onomatopoeia?',
      options: [
        'Nomatar',
        'Onoma',
        'Topo',
        'Poeiare'
      ],
      answer: 'Onoma'
    },
    //[1] question 2
    {
      question: 'Define onomatomania.',
      options: [
        'The impulse to name your children with non-traditional names.',
        'Having an irrational fear of things with names.',
        'A morbid preoccupation with words and names or a mania for word-making.',
        'A condition that is characterized by an uncanny ability to remember everyone’s name after meeting them once.'
      ],
      answer: 'A morbid preoccupation with words and names or a mania for word-making.'
    },
    //[2] question 3
    {
      question: 'What is a root word for pogonotrophy?',
      options: [
        'Pogono',
        'Pogolare',
        'Gonoware',
        'Gonotrophe'
      ],
      answer: 'Pogono'
    },
    //[3] question 4
    {
      question: 'Define pogonophobia.',
      options: [
        'An irrational love of beards.',
        'An irrational fear of pogo-stick performers.',
        'A fear of growing a beard more quickly than is likely, often resulting in excessive shaving.',
        'An irrational fear of beards.',
      ],
      answer: 'An irrational fear of beards.'
    },
    //[4] question 5
    {
      question: 'What is the root word of logorrhea?',
      options: [
        'Logos',
        'Gore',
        'Rhealis',
        'Orrea'
      ],
      answer: 'Logos'
    },
  ],
  currentQuestion: 0,
  score: 0
};

//adds the start page html

function generateQuiz() {
  const startQuizHtml = `<p class="definition"><h2 class="word-definition">et·​y·​mol·​o·​gy | \ ˌe-tə-ˈmä-lə-jē  \</h2>(noun): the study of the origin of words and the way in which their meanings have changed throughout history.</p>
  <form id="start-quiz">
      <button type="submit" id="start" class="start-quiz button"><span>Start Quiz</span></button>
  </form>`;
  $('.main-container').html(startQuizHtml);  
}
  
/* when user clicks on start quiz button -->
    displays first question
    displays user's score */

function startQuiz() {
  $('#start-quiz').submit(event => {
    event.preventDefault();
  
    askAQuestion();
    displayQuestionNumber();  
    displayScore();
  });
}

function displayQuestionNumber() {
  const questionHtml = `
  <h2 class="question-number">question: 1 of ${STORE.questions.length}</h2>`;  
  $('.header').append(questionHtml);
}

//add html to display score
function displayScore() {
  const scoreHtml = `
  <h2 class="score" id="score-counter">score: ${STORE.score}</h2>`;  
  $('.header').append(scoreHtml);
}

/* when this function is called -->
    HTML for a question is generated */
function generateAQuestion(questionObj) {
  let questionSelector = questionObj.question;
  let questionFormMaker = questionObj.options.map((option, index) => {
    return `
      <label class="answer-me" for="option-${index}">
        <input type="radio" class="radio" id="option-${index}" value="${option}" name="answer" required
      <span>${option}</span>
      </label>`;
  }).join('');

  return `
    <form class="question-container" id="submit-answer">
      <fieldset>
          ${questionSelector}
          ${questionFormMaker}
      </fieldset>
        <button type="submit" class="submit-answer button">Submit</button>
      </form>`;
      
}




function submitAnswer(questionObj) {
  $('.main-container').on('submit', '#submit-answer', function (event) {
    event.preventDefault();
    let answer = $('input[type="radio"]:checked').val();
    console.log(answer);
    
    let correct = questionObj.questions[STORE.currentQuestion].answer;
    console.log(correct);
    if (answer === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  });
}



//reference the globab variable currentQuestion and in display question fn use that index to pick the right q value
function showNextQuestion() {
  $('.main-container').on('click', '.next-question', function (event) {
    
    console.log(STORE.currentQuestion);
    if (STORE.currentQuestion < STORE.questions.length - 1) {
      updateQuestionNumber();
      askAQuestion(); 
    } else {
      finalPage();
      //console.log('this should display results page and remove the question text');
    }
  });
 
}


function correctAnswer() {
  $('#submit-answer').html(
    `<h3>Your answer is correct!</h3>
    <img src="images/batman-onomatopoeia.png" alt="batman and robin fighting cartoon" class="images" width="200px">
      <p class="answer-me">Holy DOM manipulation, Batman! You nailed it!</p>
      <form class="question-container" id="next-question">
        <button type="button" class="next-question button">Next</button>
      </form>`
  );
  updateScore();
}

function wrongAnswer() {
  const correct = STORE.questions[STORE.currentQuestion].answer;
  $('#submit-answer').html(
    `<h3>Your answer is incorrect...The correct answer is: ${correct}</h3>
    
    <form class="question-container" id="next-question">
      <button type="button" class="next-question button">Next</button>
    </form>`
  );
}

function updateScore(){
  STORE.score++;
  $('.score').text(`score: ${STORE.score}`);
}

function updateQuestionNumber() {
  STORE.currentQuestion++;
  $('.question-number').text(`question: ${STORE.currentQuestion + 1} of 5`);
}

function askAQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  console.log(question);
  $('.main-container').html(generateAQuestion(question));
}

function finalPage() {
  $('.question-number').text('Nice job!');
  let finalScore = STORE.score;
  let resultsHtml = `
  <h3>You’re a regular logomaniac! You got ${finalScore} out of 5 questions correct!</h3>
  <video
    autoplay loop muted>
    <source src="images/word-maniac.mp4" type="video/mp4" width="200px">
    <track label="English" kind="none" srclang="en">
  </video>
    <form class="question-container" id="restart-quiz">
      <button type="button" class="restart-quiz button">START AGAIN</button>
    </form>`;
  STORE.currentQuestion = 0;
  STORE.score = 0;
  $('.main-container').html(resultsHtml);
}

function restartQuiz() {
  $('.main-container').on('click','.restart-quiz', function (event) {
    $('.question-number').hide();
    $('.score').hide();
    generateQuiz();
    startQuiz();
  });
}
function playQuiz() {
  generateQuiz();
  startQuiz();
  submitAnswer(STORE);
  showNextQuestion();
  restartQuiz();
}

$(playQuiz);

