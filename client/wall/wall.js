//----------------------------------
//  Wall module for K&J web client
//  © 2014, NWK Systems
//----------------------------------

//-------------
//  Interface
//-------------

initWall = function() {
  console.log("Initializing wall.");
};

//------------------
//  Data providers
//------------------

Template.wall.images = function () {
  return WallPostsFS.find({}, {
    sort: {"copies.wallPostFileData.updatedAt": -1, "copies.wallPostFileData.utime": -1},
  });
};

Template.uploader.imageCollection = function() {
  return WallPostsFS;
};

/*Template.uploader.metadata = {
  username:Meteor.user().username
};*/

Template.uploader.metadata = function() {
  if (!Meteor.user()) { return {}; }
  var username = Meteor.user().username;
  return  {username: username};
};

//----------
//  Events
//----------

Template.wall.events = {
  'submit' : function(e, tmpl) {
    e.preventDefault();

    var newWallPost = {
      //userName : Template.username.value(),
      userName : 'testuser',
      body : tmpl.find("#wallPostTextArea").value
    };

    // clear out the old message
    tmpl.find("#wallPostTextArea").value = "";

    Meteor.call(
      "addWallPost",
      newWallPost,
      function (err, result) {
        if (err) {
          alert(err.reason);
        }
      }
    );
  }
};

Template.uploader2.events = {
  'change #fileInput': function(event, template) {
    console.log('File selected.');
    FS.Utility.eachFile(event, function(file) {
      WallPostsFS.insert(file, function (err, fileObj) {
        //If !err, we have inserted new doc with ID fileObj._id, and
        //kicked off the data upload using HTTP
      });
    });
  },

  'click #dateUpdater': function(event, template) {
    console.log('Updating post dates.');
    Meteor.call('updatePostDates');
  }
};
