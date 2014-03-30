//--------------------------------
//  Trivia module for K&J server
//  © 2014, NWK Systems
//--------------------------------

//--------------------
//  Server interface
//--------------------

initWall = function() {
  console.log("Initializing wall.");

  Meteor.publish('wall', function() {
    return WallPostsFS.find({}, {
      sort: {"copies.wallPostFileData.utime": -1},
      limit: 25 
    });
  });
};

