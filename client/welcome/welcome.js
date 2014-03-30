//----------
//  Events
//----------

/*Template.welcome.events =
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
      Meteor.call('heartbeat');
    }
  }
};*/
