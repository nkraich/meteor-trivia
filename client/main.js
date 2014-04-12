//-----------------------
//  K&J web client
//  © 2014, NWK Systems
//-----------------------

//-------------
//  Interface
//-------------

Meteor.startup(function () {
  // Client variables
  answered = false;
  intervalHandle = null;
  Session.set("timeRemaining", SECONDS_PER_QUESTION);

  // Module initialization
  initMain();
  initChat();
  initTrivia();
  initWall();
  initArcade();
  setUpEvents();
});

initMain = function()
{
  console.log("Initializing client core.");

  initMisc();

  Meteor.subscribe("main");
  Meteor.subscribe("chat");
  Meteor.subscribe("trivia");
  Meteor.subscribe("wall");
  Meteor.subscribe("arcade");
  Meteor.subscribe("globalConfigs");

  startNewQuestion = function() {
    answered = false;
    $.playSound('newProblem');
  };

  intervalHandle = Meteor.setInterval(function() {
    var timeRemaining = Session.get("timeRemaining");
    if (timeRemaining > 0) {
      timeRemaining -= 1;
    }
    Session.set("timeRemaining", timeRemaining);
  }, 1000);

  // Update the time when the question changes.
  var cursor = Questions.find({});
  cursor.observeChanges({
    added: function() {
      //Meteor.call('heartbeat');
      Meteor.call("getTimeRemaining", function(error, result) {
        Session.set("timeRemaining", result);
      });
      startNewQuestion();
    }
  });

  // Since the client is just starting, get the time remaining for the current
  // problem.
  Meteor.call("getTimeRemaining", function(error, result) {
    Session.set("timeRemaining", result);
  });

  // Automatic anonymous login.
  Deps.autorun(function() {
    if (!Meteor.userId()) {
      Meteor.loginAnonymously(function(err, res) {
        //alert("Logged in: " + Meteor.userId());
        Meteor.users.update({_id: Meteor.userId()}, { $set: { score: 0 } });
        Meteor.call('heartbeat');
      });
    }
  });
};

//------------------
//  Data providers
//------------------

Template.username.value = function () {
  if (Meteor.user()) {
    return Meteor.user().username;
  }
  else {
    return "";
  }
};

Template.layout.siteTitle = function () {
  if (GlobalConfigs.findOne() && GlobalConfigs.findOne().siteTitle !== "") {
    return GlobalConfigs.findOne().siteTitle;
  }
  else {
    return ""
  }
};

Template.menuBar.siteTitle = function () {
  if (GlobalConfigs.findOne() && GlobalConfigs.findOne().siteTitle !== "") {
    return GlobalConfigs.findOne().siteTitle;
  }
  else {
    return ""
  }
};


//----------
//  Events
//----------

setUpEvents = function() {
  $(window).focus(function() {
     // If the client isn't running, the timer will get out of sync with the
     // server timer.  This will re-sync the time whenever the user returns to
     // the app.
    Meteor.call("getTimeRemaining", function(error, result) {
      Session.set("timeRemaining", result);
    });
  });
};

Template.menuBar.events = {
  'click #maxLeftOption': function(event, template) {
    $('#leftPanel').css('width', '100%');
    $('#leftPanel').css('display', 'inline-block');
    $('#rightPanel').css('display', 'none');
  },

  'click #maxRightOption': function(event, template) {
    $('#rightPanel').css('width', '100%');
    $('#rightPanel').css('display', 'inline-block');
    $('#rightPanel').css('left', '0%');
    $('#leftPanel').css('display', 'none');
  },

  'click #splitOption': function(event, template) {
    $('#leftPanel').css('width', '50%');
    $('#leftPanel').css('display', 'inline-block');
    $('#rightPanel').css('width', '50%');
    $('#rightPanel').css('display', 'inline-block');
    $('#rightPanel').css('left', '50%');
  }
};
