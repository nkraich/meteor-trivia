//------------------------------
//  K&J server
//  © 2014, Nicholas W. Kraich
//------------------------------

//--------------------
//  Server interface
//--------------------

Meteor.startup(function() {
  // Global variables for the server
  questionNumber = -1;
  timeRemaining = 0;
  question = null;

  // Module initialization
  initMain();
  initWall();
  initChat();
  initTrivia();
  initArcade();

  /*console.log("Fixing DB");
  // Fix DB
WallPostsFS.find().forEach(function (fileObj) {
  var mod = {$set: {}, $unset: {}};
  _.each(fileObj.copies, function (info, copyName) {
    mod.$set['copies.' + copyName + '.updatedAt'] = info.utime || new Date;
    mod.$unset['copies.' + copyName + '.utime'] = "";
  });
  fileObj.update(mod);
  console.log("Fixed DB");
});*/


});

initMain = function()
{
  console.log("Initializing server core.");

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

  // Publish global server variables, stored in a single GlobalConfig document.
  Meteor.publish("globalConfigs", function() {
    return GlobalConfigs.find({});
  });

  // Publish the active users.
  Meteor.publish("main", function(channelName) {
    return Meteor.users.find(
      {
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

Meteor.methods(
{
  initializeDatabase: function()
  {
    initData();
  },

  initializeQuestions: function()
  {
    initQuestions();
  }
});
