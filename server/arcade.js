//--------------------------------
//  Arcade module for K&J server
//  © 2014, Nicholas W. Kraich
//--------------------------------

//--------------------
//  Server interface
//--------------------

initArcade = function()
{
  console.log("Initializing arcade.");

  Meteor.publish('arcade', function() {
    return Scores.find({}, {
      sort: {"amount": -1},
      limit: 10
    });
  });
};

//--------------------
//  Client interface
//--------------------

Meteor.methods(
{
  addScore: function(amount) {
    var user = Meteor.user();
    var name = "Anonymous";
    if (user && user.username) {
      name = user.username;
    }

    var newScore = {
      username: name,
      amount: amount
    };
    Scores.insert(newScore)
  }
});
