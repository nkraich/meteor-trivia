//--------------------------------
//  Trivia module for K&J server
//  © 2014, Nicholas W. Kraich
//--------------------------------

//--------------------
//  Server interface
//--------------------

initTrivia = function() {
  console.log("Initializing trivia.");

  Questions.update({}, {$set: {current: false}}, {multi: true});
  Meteor.publish("trivia", function(channelName) {
    //return Questions.find({current: true});
    return Questions.find({});
  });

  timeRemaining = SECONDS_PER_QUESTION;

  Meteor.setInterval(function()
  {
    if (timeRemaining > 0) {
      timeRemaining -= 1;
    }
    else {
      Meteor.call("nextQuestion");
    }
  }, 1000);
};

//--------------------
//  Client interface
//--------------------

Meteor.methods(
{
  getTimeRemaining: function() {
    return timeRemaining;
  },

  nextQuestion: function() {
    if (questionNumber === -1) { return; }
    Questions.update({}, {$set: {current: false}}, {multi: true});
    questionNumber -= 1;
    if (questionNumber < 1) {
      questionNumber = 50;
    }
    _showQuestion(questionNumber);
    timeRemaining = SECONDS_PER_QUESTION;

    return timeRemaining;
  },

  answer: function(selectedAnswer)
  {
    if (selectedAnswer === question.correctAnswer) {
      if (timeRemaining >= 50) {
        _addToScore(50);
      }
      else if (timeRemaining >= 40) {
        _addToScore(40);
      }
      else if (timeRemaining >= 25) {
        _addToScore(25);
      }
      else if (timeRemaining >= 10) {
        _addToScore(10);
      }
      else {
        _addToScore(5);
      }
      return true;
    }
    else {
      return false;
    }
  },

  stopTrivia: function() {
    console.log("Stopping trivia.");
    questionNumber = -1;
    Questions.update({}, {$set: {current: false}}, {multi: true});
  },

  startTrivia: function(questionNum) {
    console.log("Starting trivia.");

    // Reset scores.
    Meteor.users.update({}, {$set: {score: 0}}, {multi: true});
    questionNumber = questionNum + 1;

    Meteor.call('nextQuestion');
  }
});

//-----------
//  Private
//-----------

_showQuestion = function(questionNumber) {
  Questions.update({number: questionNumber}, {$set: {current: true}});
  question = _getQuestionFromNumber(questionNumber);
};

_getQuestionFromNumber = function(questionNumber) {
  return Questions.findOne({number: questionNumber});
};

_addToScore = function(amount)
{
  if (! Meteor.userId()) { return; }

  var user = Meteor.user();
  var newScore;
  if (user.score) {
    newScore = user.score + amount;
  }
  else {
    newScore = amount;
  }

  Meteor.users.update({_id: Meteor.userId()}, {
      $set: {
          score: newScore
      }
  });
};
