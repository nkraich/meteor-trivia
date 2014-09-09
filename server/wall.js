//--------------------------------
//  Trivia module for K&J server
//  © 2014, Nicholas W. Kraich
//--------------------------------

//--------------------
//  Server interface
//--------------------

initWall = function() {
  console.log("Initializing wall.");

  Meteor.publish('wall', function()
  {
    return [
      WallPostsFS.find({}, {
        sort: {
          "copies.wallPostFileData.updatedAt": -1,
          "copies.wallPostFileData.utime": -1
        }
      }),
      Posts.find({}, {
        sort: {"createdAt": -1}
      })
    ];
  });
};
