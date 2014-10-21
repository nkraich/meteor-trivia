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
});
