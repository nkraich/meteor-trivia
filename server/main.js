//-----------------------
//  K&J server
//  © 2014, NWK Systems
//-----------------------

//--------------------
//  Server interface
//--------------------

Meteor.startup(function() {
  // Global variables for the server
  questionNumber = -1;
  timeRemaining = 0;
  question = null;

  Meteor.publish("globalConfigs", function() {
    return GlobalConfigs.find({});
  });

  // Module initialization
  initMain();
  initChat();
  initTrivia();
  initWall();
  initArcade();

});

initMain = function() {
  console.log("Initializing server core.");

  timeRemaining = SECONDS_PER_QUESTION;

  // Initialize the database if it's empty.
  if (Questions.find().count() === 0) {
    initData();
  }

  // Configure user access.
  Meteor.users.allow({
    update:function(userId, upd) {
      console.log(upd);
      return true;
    }
  });

  Meteor.publish("main", function(channelName) {
    return Meteor.users.find(
      {
        //'services.resume.loginTokens.1': {$exists: true}
        //'services.resume.loginTokens': {$size: {$gt: 0}}
        //'status.online': true
        //'services.resume.loginTokens': {$size: {$gt: 0}}
        'services.resume.loginTokens': {$size: 1}
      },
      {
        fields: {'username': 1, 'score': 1, 'away': 1},
        sort: {score: 1}
      }
    );
  });
};

//--------------------
//  Client interface
//--------------------

Meteor.methods({
  initializeDatabase: function()
  {
    initData();
  },
  initializeQuestions: function()
  {
    initQuestions();
  }
});
