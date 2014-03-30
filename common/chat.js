Meteor.methods({
  addMessage : function (newMessage)
  {
    Meteor.call('heartbeat');  // Return user from away if necessary.

    if (newMessage.message.split(' ')[0] === "/nick") {
      var newUsername = newMessage.message.split(' ')[1];
      Meteor.users.update({_id: Meteor.userId()}, {
          $set: {
              username: newUsername
          }
      });
      return;
    }

    var isAdmin = newMessage.userName === "puffin" || newMessage.userName === "nim";

    if (isAdmin && newMessage.message === "/start") {
      Meteor.call('startTrivia', 73);
      return;
    }
    if (isAdmin && newMessage.message === "/next") {
      Meteor.call('nextQuestion');
      return;
    }
    if (isAdmin && newMessage.message === "/start 70") {
      Meteor.call('startTrivia', 70);
      return;
    }
    if (isAdmin && newMessage.message === "/start 60") {
      Meteor.call('startTrivia', 60);
      return;
    }
    if (isAdmin && newMessage.message === "/start 50") {
      Meteor.call('startTrivia', 50);
      return;
    }
    if (isAdmin && newMessage.message === "/start 45") {
      Meteor.call('startTrivia', 45);
      return;
    }
    if (isAdmin && newMessage.message === "/start 40") {
      Meteor.call('startTrivia', 40);
      return;
    }
    if (isAdmin && newMessage.message === "/start 30") {
      Meteor.call('startTrivia', 30);
      return;
    }
    if (isAdmin && newMessage.message === "/start 20") {
      Meteor.call('startTrivia', 20);
      return;
    }
    if (isAdmin && newMessage.message === "/start 10") {
      Meteor.call('startTrivia', 10);
      return;
    }
    if (isAdmin && newMessage.message === "/stop") {
      Meteor.call('stopTrivia');
      return;
    }
    if (isAdmin && newMessage.message === "/clear") {
      Meteor.call('clearChat');
      return;
    }
    if (isAdmin && newMessage.message === "/initdb") {
      Meteor.call('initializeDatabase');
      return;
    }
    if (isAdmin && newMessage.message === "/initq") {
      Meteor.call('initializeQuestions');
      return;
    }

    if (newMessage.userName === "") {
      throw new Meteor.Error(413, "Enter a username in the big input box on the left.");
    }
    if (newMessage.message === "") {
      throw new Meteor.Error(413, "Please enter a message to send.");
    }

    newMessage.createdAt = new Date();
    var id = Messages.insert(newMessage);
    
    /*var cursor = Messages.find();
    if (cursor.count() > 100) {
      var oldestMessage = Messages.findOne();
      Messages.remove(oldestMessage);
    }*/

    return id;
  }
});
