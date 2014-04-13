//------------------------------
//  Klik & Jam
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
Posts = new Meteor.Collection("posts");
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
  this.route('welcome', {
    path: '/',
    template: 'welcome'
  });

  this.route('jam', {
    path: '/jam'
  });

  this.route('trivia', {
    path: '/quiz'
  });

  this.route('wall', {
    path: '/wall'
  });

  this.route('games', {
    path: '/games'
  });

  this.route('games', {
    path: '/games/:title',
    action: function () {
      this.render('game_' + this.params.title);
    }
  });

  this.route('arcade', {
    path: '/arcade/:title',
    template: 'appleball',
    action: function () {
      this.render('arcade_' + this.params.title);
    }
  });
});
