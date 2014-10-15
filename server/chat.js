//------------------------------
//  Chat module for K&J server
//  © 2014, Nicholas W. Kraich
//------------------------------

//-----------------
//  Intialization
//-----------------

initChat = function() {
  console.log("Initializing chat.");

  Meteor.publish("chat", function(channelName) {
    return Messages.find({}, {sort: {createdAt: -1}, limit: 100});
  });
};

Meteor.methods({
  clearChat: function()
  {
    Messages.remove({});
  }
});
