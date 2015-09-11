//----------
//  Events
//----------

Template.rules.events =
{
  'click #joinButton': function (event) {
    //Meteor.call('startTrivia', 73);
    Session.set('isRunning', true);
  }
};
