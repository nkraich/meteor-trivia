//-------------
//  Interface
//-------------

Meteor.methods(
{
  addMessage : function (newMessage)
  {
    Meteor.call('heartbeat');  // Return user from away if necessary.

    if (_isCommand(newMessage)) {
      _runCommand(newMessage);
      return;
    }

    if (newMessage.userName === "") {
      throw new Meteor.Error(
        413,
        "Enter a username by typing /nick yournamehere."
      );
    }
    if (newMessage.message === "") {
      throw new Meteor.Error(
        413,
        "Please type a message to send."
      );
    }

    newMessage.createdAt = new Date();
    var id = Messages.insert(newMessage);
    
    return id;
  }
});

//-----------
//  Private
//-----------

_isCommand = function(message) {
  return (message.message.substring(0,1) === '/');
};

_runCommand = function(message)
{
    var splitString = message.message.split(' ');

    if (splitString[0] === "/nick") {
      var newUsername = message.message.split(' ')[1];
      Meteor.users.update({_id: Meteor.userId()}, {
          $set: {
              profile: {name: newUsername}
          }
      });
      return;
    }

    if (splitString[0] === "/title") {
      splitString.shift();
      var newTitle = splitString.join(' ');
      var config = GlobalConfigs.findOne()
      GlobalConfigs.update({_id: config._id}, {
          $set: {
              siteTitle: newTitle
          }
      });
      return;
    }

    var isAdmin = message.userName === "puffin"
               || message.userName === "nim"
               || message.userName === "BenH"
               || message.userName === "DaveJ";

    if (isAdmin && message.message === "/start") {
      Meteor.call('startTrivia', 73);
      return;
    }
    if (isAdmin && message.message === "/next") {
      Meteor.call('nextQuestion');
      return;
    }
    if (isAdmin && message.message === "/start 70") {
      Meteor.call('startTrivia', 70);
      return;
    }
    if (isAdmin && message.message === "/start 60") {
      Meteor.call('startTrivia', 60);
      return;
    }
    if (isAdmin && message.message === "/start 50") {
      Meteor.call('startTrivia', 50);
      return;
    }
    if (isAdmin && message.message === "/start 45") {
      Meteor.call('startTrivia', 45);
      return;
    }
    if (isAdmin && message.message === "/start 40") {
      Meteor.call('startTrivia', 40);
      return;
    }
    if (isAdmin && message.message === "/start 30") {
      Meteor.call('startTrivia', 30);
      return;
    }
    if (isAdmin && message.message === "/start 20") {
      Meteor.call('startTrivia', 20);
      return;
    }
    if (isAdmin && message.message === "/start 10") {
      Meteor.call('startTrivia', 10);
      return;
    }
    if (isAdmin && message.message === "/stop") {
      Meteor.call('stopTrivia');
      return;
    }
    if (isAdmin && message.message === "/clear") {
      Meteor.call('clearChat');
      return;
    }
    if (isAdmin && message.message === "/initdb") {
      Meteor.call('initializeDatabase');
      return;
    }
    if (isAdmin && message.message === "/initq") {
      Meteor.call('initializeQuestions');
      return;
    }

}
