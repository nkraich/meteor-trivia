//-------------
//  Interface
//-------------

initTrivia = function() {
  console.log("Initializing trivia.");
  initQuestion();
};

//------------------
//  Data providers
//------------------

Template.trivia.running = function () {
  return Questions.find().count() > 0;
};
