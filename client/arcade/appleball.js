//------------------
//  Game interface
//------------------

Template.arcade_appleball.rendered = function () {
  var arcadeWindow = window.frames['arcadeFrame'];
  if (arcadeWindow) {
    arcadeWindow.addScore = function (amount) {
      Meteor.call('addScore', amount);
      Session.set('showScorePage', true);
    }
  }
};

//------------------
//  Data providers
//------------------

Template.arcade_appleball.showScorePage = function () {
  return Session.get('showScorePage');
};

Template.arcade_appleball.scores = function() {
  var scores = Scores.find({}, { sort: {"amount": -1} })
  .map(function(doc, index, cursor) {
    var i = _.extend(doc, {index: index+1});
    return i;
  });
  return scores;
};

//----------
//  Events
//----------

Template.arcade_appleball.events = {
  'click #startGameButton': function () {
    Session.set('showScorePage', false);
  },
  'click #showScoresLink': function () {
    //var arcadeWindow = window.frames['arcadeFrame'];
    //arcadeWindow.addScore(Math.floor((Math.random()*100)+1) * 25);
    Session.set('showScorePage', true);
  }
};
