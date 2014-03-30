//------------------------------------
//  Trivia module for K&J web client
//  © 2014, NWK Systems
//------------------------------------

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
