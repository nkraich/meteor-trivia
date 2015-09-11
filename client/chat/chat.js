(function () {

//-------------
//  Interface
//-------------

initChat = function() {
  console.log("Initializing chat.");
};

//------------------
//  Data providers
//------------------

Template.messages.messages = function() {
  if (!Meteor.user()) { return []; }
  return Messages.find({}, {sort: {createdAt: 1}});
};

Template.userList.users = function() {
  return Meteor.users.find({'profile.name':{$ne:null}}, {sort: {score: -1, 'profile.name': 1}});
};

Template.userList.visitorStatus = function() {
  count = Meteor.users.find({username:null}, {sort: {score: -1, username: 1}}).count();
  if (count == 1) {
    return count + " visitor";
  }
  else {
    return count + " visitors";
  }
};

Template.chat.loggedIn = function() {
  if (!Meteor.user()) { return false; }
  var username = Meteor.user().profile.name;
  return username;
};

})();

//--------------
//  UI Helpers
//--------------

Handlebars.registerHelper('addLinks', function(text) {
  var result = Autolinker.link(text);
  return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('sanitizeContent', function(content){
  //content = jQuery(content).text();
  content = content.replace(/<(?:.|\n)*?>/gm, '');
  content = Autolinker.link(content);
  return new Handlebars.SafeString(content);
  //content = XBBCODE(content);
  //return _.escape(content);
});

//----------
//  Events
//----------

Template.chat.events = {
  'submit' : function(e, tmpl) {
    e.preventDefault();

    var newMessage = {
      userName : Template.username.value(),
      message : tmpl.find("#chatInput").value
    };

    // Clear the old message.
    tmpl.find("#chatInput").value = "";

    Meteor.call(
      "addMessage",
      newMessage,
      function (err, result) {
        if (err) {
          alert(err.reason);
        }
      }
    );
  }
};

Template.username.events =
{
  'click #userName': function(event) {
    UserSession.set("username", "test");
  },

  'change #userName': function(event) {
    if ($('#userName').val().length > 0 && Meteor.userId()) {
      Meteor.users.update({_id: Meteor.userId()}, {
          $set: {
              profile: {name: $('#userName').val()}
          }
      });
      Meteor.call('heartbeat');
    }
  }
};

// Update the chat window position as new elements are added.
Template.messages.rendered = function() {
  $("#chatWindow").scrollTop($("#chatWindow")[0].scrollHeight);
};

Template.chat.rendered = function() {
  $("#chatInput").focus();
};

Template.username.rendered = function() {
  $("#userName").focus();
};
