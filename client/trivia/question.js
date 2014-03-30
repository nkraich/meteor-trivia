//-------------
//  Interface
//-------------

initQuestion = function() {
};

Meteor.methods({
  nextQuestion: function() {
  },

  answer: function(selectedAnswer) {
    _highlightAnswer(selectedAnswer, "selected");
  }
});

//------------------
//  Data providers
//------------------

Template.question.number = function () {
  var question = Questions.findOne({});
  return question && question.number;
};

Template.question.picture = function () {
  var question = Questions.findOne({});
  return question && question.picture;
};

Template.question.prompt = function () {
  var question = Questions.findOne({});
  return question && question.prompt;
};

Template.question.answerA = function () {
  var question = Questions.findOne({});
  return question && question.answerA;
};

Template.question.answerB = function () {
  var question = Questions.findOne({});
  return question && question.answerB;
};

Template.question.answerC = function () {
  var question = Questions.findOne({});
  return question && question.answerC;
};

Template.question.answerD = function () {
  var question = Questions.findOne({});
  return question && question.answerD;
};

//----------
//  Events
//----------

Template.question.events =
{
  'click #answerA': function (event) {
    _answerQuestion("A");
  },
  'click #answerB': function (event) {
    _answerQuestion("B");
  },
  'click #answerC': function (event) {
    _answerQuestion("C");
  },
  'click #answerD': function (event) {
    _answerQuestion("D");
  }
};

//-----------
//  Private
//-----------

_answerQuestion = function(answer)
{
  // Don't allow multiple answers.
  if (answered === true) { return; }
  answered = true;

  Meteor.call('answer', answer, function(error, result) {
    if (result === true) {
      _highlightAnswer(answer, "correct");
    }
    else {
      _highlightAnswer(answer, "incorrect");
    }
  });
};

_highlightAnswer = function(selectedAnswer, styleClass) {
  _clearHighlights();

  if (selectedAnswer === "A") {
    $('#answerA').addClass(styleClass);
  }
  else if (selectedAnswer === "B") {
    $('#answerB').addClass(styleClass);
  }
  else if (selectedAnswer === "C") {
    $('#answerC').addClass(styleClass);
  }
  else if (selectedAnswer === "D") {
    $('#answerD').addClass(styleClass);
  }
};

_clearHighlights = function() {
  $('.answer').removeClass("selected");
  $('.answer').removeClass("correct");
  $('.answer').removeClass("incorrect");
};
