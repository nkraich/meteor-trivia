//------------------
//  Data providers
//------------------

Template.timeRemaining.value = function () {
  return Session.get("timeRemaining");
};

Template.info.username = function () {
  if (Meteor.user()) {
    return Meteor.user().profile.name;
  }
  else {
    return "";
  }
};

Template.score.value = function () {
  if (Meteor.user()) {
    return Meteor.user().score;
  }
  else {
    return 0;
  }
};

//----------
//  Events
//----------

Template.info.events =
{
  'click #rulesButton': function (event) {
    Meteor.call('stopTrivia');
  }
};
