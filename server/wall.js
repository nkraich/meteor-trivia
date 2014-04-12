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
    //var dateLimit = new Date("April 1, 2014 01:00:00");
    return [
      WallPostsFS.find({}, {
        sort: {"copies.wallPostFileData.updatedAt": -1, "copies.wallPostFileData.utime": -1},
        limit: 25 
      }),
      Posts.find({}, {
        sort: {"createdAt": -1},
        limit: 25
      })
    ];
  });
};


Meteor.methods({
  updatePostDates: function()
  {
    console.log('Updating post dates.');
    /*
    //var posts = WallPostsFS.find({});
    var posts = WallPostsFS.update(
      {},
      {$rename {"copies.wallPostFileData.utime": "copies.wallPostFileData.updatedAt"}},
      {"multi": true}
    );

    posts.forEach(function (post) {
      if (post.copies && post.copies.wallPostFileData) {
        //var isoDate = ISODate(post.copies.wallPostFileData.utime);
        //var date = new Date(isoDate.valueOf());
        console.log("Post date: " );
      }
    });
    */
  }
});

FS.TempStore.on('ready', function(fileObj) {
  console.log("Uploaded.");
  //alert('Something happened!');
});
