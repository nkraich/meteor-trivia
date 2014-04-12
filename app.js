//-----------------------
//  Klik & Jam
//  © 2014, NWK Systems
//-----------------------

// Constants
SECONDS_PER_QUESTION = 60;

// Collections
Questions = new Meteor.Collection("questions");
Channels = new Meteor.Collection("channels");
Messages = new Meteor.Collection("messages"); 
Scores = new Meteor.Collection("scores"); 
Posts = new Meteor.Collection("posts");
GlobalConfigs = new Meteor.Collection("globalConfigs");

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
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
    //layoutTemplate: 'arcadeLayout',
    //waitOn: IRLibLoader.load('/arcade/appleball/src/RuntimeDev.js'),
    action: function () {
      this.render('arcade_' + this.params.title);
    }
  });

  /*this.route('arcade', {
    path: '/arcade'
  });*/

  this.route('post', {
    path: '/posts/:_id',

    load: function () {
      // called on first load
    },

    // before hooks are run before your action
    before: [
      function () {
        this.subscribe('post', this.params._id).wait();
        this.subscribe('posts'); // don't wait
      },

      function () {
        // we're done waiting on all subs
        if (this.ready()) {
          NProgress.done(); 
        } else {
          NProgress.start();
          this.stop(); // stop downstream funcs from running
        }
      }
    ],

    action: function () {
      var params = this.params; // including query params
      var hash = this.hash;
      var isFirstRun = this.isFirstRun;

      this.render(); // render all
      this.render('specificTemplate', {to: 'namedYield'});
    },

    unload: function () {
      // before a new route is run
    }
  });
});
