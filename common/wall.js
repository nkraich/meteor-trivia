Meteor.methods({
  addWallPost : function (newWallPost)
  {
    Meteor.call('heartbeat');  // Return user from away if necessary.

    if (newWallPost.userName === "") {
      throw new Meteor.Error(413, "Enter a username in the chat area before posting to the wall.");
    }
    if (newWallPost.message === "") {
      throw new Meteor.Error(413, "Please enter a message to post.");
    }

    newWallPost.createdAt = new Date();
    var id = Posts.insert(newWallPost);
    
    return id;
  }
});
