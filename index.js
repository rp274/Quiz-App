//counters to keep track of question and score
let questionNumber = 0;
let score = 0;

//increment question number
function incrementQuestionNumber() {
  questionNumber++;
}

//increment score
function incrementScore() {
  score++;
}

//generate question
function generateQuestion() {
  if (questionNumber < STORE.length) {
    return `<h1 class="js-question">${STORE[questionNumber].question}</h1>
        <form class="js-answer-form">
          <fieldset>
            <legend></legend>
            <label for="answer option" class="answer-option"></label>
              <input class="answer-option-button" type="button" value="${
                STORE[questionNumber].answers[0]
              }">
            <label for="answer option" class="answer-option"></label>
              <input class="answer-option-button" type="button" value="${
                STORE[questionNumber].answers[1]
              }">
            <label for="answer option" class="answer-option"></label>
              <input class="answer-option-button" type="button" value="${
                STORE[questionNumber].answers[2]
              }">
            <label for="answer option"></label>
              <input class="answer-option-button" type="button" value="${
                STORE[questionNumber].answers[3]
              }">
          </fieldset>
        </form>
        <section class="js-question-progression-tracker">
          <span class="indicator q1"></span>
          <span class="indicator q2"></span>
          <span class="indicator q3"></span>
          <span class="indicator q4"></span>
          <span class="indicator q5"></span>
          <span class="indicator q6"></span>
          <span class="indicator q7"></span>
          <span class="indicator q8"></span>
          <span class="indicator q9"></span>
          <span class="indicator q10"></span>
        </section>
        <sesction class="js-score-box">
          <p>score: ${score}/10</p>
        </sesction>`;
  } else {
    quizResults();
  }
}

//start quiz
function startQuiz() {
  $(".start-button").click(function(event) {
    $(".start-quiz").css("display", "none");
    $(".question-form").css("display", "block");
  });
}

//render question
function renderQuestion() {
  $(".question-form").html(generateQuestion());
  updateProgress();
}

//answer submit
function answerSubmit() {
  $(".answer-option-button:button").click(function(event) {
    if ($(this).val() === `${STORE[questionNumber].correctAnswer}`) {
      userCorrect();
      nextQuestion();
    } else {
      userWrong();
      nextQuestion();
    }
  });
}

//user feedback correct answer
function userCorrect() {
  $(".question-feedback").html("Correct!");
  $(".overlay").css("background-color", "#769fa5");
  $(".display-correct-answer").css("display", "none");
  overlayOn();
  incrementQuestionNumber();
  incrementScore();
}

//user feedback wrong answer
function userWrong() {
  $(".question-feedback").html("Incorrect.");
  $(".display-correct-answer")
    .html(
      `<p><b>The Correct Answer was:</b><br><em>${
        STORE[questionNumber].correctAnswer
      }</em></p>`
    )
    .css("display", "block");
  $(".overlay").css("background-color", "#de1b22");
  overlayOn();
  incrementQuestionNumber();
}

//control feedback overlay
function overlayOn() {
  $(".overlay").css("display", "block");
  $(".question-form").css("display", "none");
  $(".next-question").click(function(event) {
    overlayOff();
  });
}

function overlayOff() {
  if (questionNumber < STORE.length) {
    $(".overlay").css("display", "none");
    $(".question-form").css("display", "block");
  } else {
    $(".overlay").css("display", "none");
    $(".question-form").css("display", "none");
  }
}

//progression indicator
function updateProgress() {
  switch (questionNumber) {
    case 0:
      $(".q1").addClass("current-question");
      break;
    case 1:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("current-question");
      break;
    case 2:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("current-question");
      break;
    case 3:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("current-question");
      break;
    case 4:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("question-tracked");
      $(".q5").addClass("current-question");
      break;
    case 5:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("question-tracked");
      $(".q5").addClass("question-tracked");
      $(".q6").addClass("current-question");
      break;
    case 6:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("question-tracked");
      $(".q5").addClass("question-tracked");
      $(".q6").addClass("question-tracked");
      $(".q7").addClass("current-question");
      break;
    case 7:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("question-tracked");
      $(".q5").addClass("question-tracked");
      $(".q6").addClass("question-tracked");
      $(".q7").addClass("question-tracked");
      $(".q8").addClass("current-question");
      break;
    case 8:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("question-tracked");
      $(".q5").addClass("question-tracked");
      $(".q6").addClass("question-tracked");
      $(".q7").addClass("question-tracked");
      $(".q8").addClass("question-tracked");
      $(".q9").addClass("current-question");
      break;
    case 9:
      $(".q1").addClass("question-tracked");
      $(".q2").addClass("question-tracked");
      $(".q3").addClass("question-tracked");
      $(".q4").addClass("question-tracked");
      $(".q5").addClass("question-tracked");
      $(".q6").addClass("question-tracked");
      $(".q7").addClass("question-tracked");
      $(".q8").addClass("question-tracked");
      $(".q9").addClass("question-tracked");
      $(".q10").addClass("current-question");
      break;
  }
}

//render next question
function nextQuestion() {
  renderQuestion();
  answerSubmit();
  updateProgress();
}

//generate results
function generateResults() {
  if (score === 10) {
    return `<h1>Perfect Score!</h1>
    <h3>You scored ${score} out of 10 points</h3>
    <input class="retry-button" type="button" value="Retry">`;
  } else if (score >= 7) {
    return `<h1>Nice Job!</h1>
    <h3>You scored ${score} out of 10 points</h3>
    <input class="retry-button" type="button" value="Retry">`;
  } else {
    return `<h1>That was Rough...</h1>
    <h3>You scored ${score} out of 10 points</h3>
    <input class="retry-button" type="button" value="Retry">`;
  }
}

//renders results of quiz
function quizResults() {
  $(".quiz-results")
    .html(generateResults())
    .css("display", "block");
  $(".question-form").css("display", "none");
  quizRetry();
}

//quiz reset
function quizRetry() {
  $(".retry-button").click(function(event) {
    location.reload();
  });
}

//runs the quiz
function runQuizApp() {
  startQuiz();
  renderQuestion();
  answerSubmit();
}
$(runQuizApp);
