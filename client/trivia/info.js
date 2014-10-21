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

/*Template.info.events =
{
  'click #userName': function(event) {
    UserSession.set("username", "test");
  },

  'change #userName': function(event) {
    if ($('#userName').val().length > 0 && Meteor.userId()) {
      Meteor.users.update({_id: Meteor.userId()}, {
          $set: {
              username: $('#userName').val()
          }
      });
    }
  }
};*/
