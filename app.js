//------------------------------
//  Meteor Trivia
//  © 2014, Nicholas W. Kraich
//------------------------------

//-------------
//  Constants
//-------------

SECONDS_PER_QUESTION = 60;

//--------------
// Collections
//--------------

GlobalConfigs = new Meteor.Collection("globalConfigs");
Channels = new Meteor.Collection("channels");
Messages = new Meteor.Collection("messages"); 
Questions = new Meteor.Collection("questions");
Scores = new Meteor.Collection("scores"); 

//----------
// Helpers
//----------

UI.registerHelper('formatDate', function(date) {
  //return moment(date).format('MM-DD-YYYY');
  if (date) {
    return moment(date).fromNow();
  }
  else {
    return "";
  }
  //return "TEST";
});

//---------
// Routes
//---------

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function ()
{
  this.route('trivia', {
    path: '/'
  });

  this.route('settings', {
    path: '/settings'
  });

  this.route('editor', {
    path: '/editor'
  });

  this.route('editorQuestion', { 
    path: '/editor/:_id',
    data: function() { return Questions.findOne(this.params._id); }
  });
});
