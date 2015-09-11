//-------------
//  Interface
//-------------

initTrivia = function() {
  console.log("Initializing trivia.");
  Session.set('isRunning', false);
  initQuestion();
};

//------------------
//  Data providers
//------------------

Template.trivia.isRunning = function () {
  return Session.get('isRunning');
};
