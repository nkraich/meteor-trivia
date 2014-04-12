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
  return WallPostsFS.find({"copies.wallPostFileData.utime":{$exists: true}}, {
    sort: {"copies.wallPostFileData.updatedAt": -1, "copies.wallPostFileData.utime": -1}
  });
};

Template.wallPosts.posts = function () {
  return Posts.find({}, {
    sort: {"createdAt": -1}
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

Template.uploader2.isFilePending = function() {
  //return false;
  return (Session.get('wallFile') !== null);
};

Template.uploader2.pendingFileUrl = function() {

  var image = WallPostsFS.findOne({_id:Session.get('wallFile')});
  if (image) {
    return image.url();
  }
  else {
    return null;
  }

    //alert(file.isImage());

  //return file.url();

  //alert(file.url());
  //alert(file.isImage());
  //var url = file.url();
  //alert(url);
  /*if (Session.get('wallFile') !== undefined) {
    var file = Session.get('wallFile').url();
    alert(file);
  }
  else {
    return null;
  }*/
};

//--------------
//  UI Helpers
//--------------

Handlebars.registerHelper('getPictureUrl', function(fileId) {
  //var result = Autolinker.link(text);
  //return new Handlebars.SafeString(result);

  var image = WallPostsFS.findOne({_id:fileId});
  if (image) {
    return image.url();
  }
  else {
    return null;
  }
});

//----------
//  Events
//----------

Template.uploader2.events = {
  'change #fileInput2': function(event, template) {
    console.log('File selected.');
    FS.Utility.eachFile(event, function(file) {
      //var fsFile = new FS.File(file);
      var image = WallPostsFS.insert(file, function (err, fileObj) {
        Session.set('wallFile', image._id);
        //alert(image._id);
        //If !err, we have inserted new doc with ID fileObj._id, and
        //kicked off the data upload using HTTP
      });
    });
  },

  'click #dateUpdater': function(event, template) {
    console.log('Updating post dates.');
    Meteor.call('updatePostDates');
  },

  'click #pendingDeleteButton': function(event, template) {
    Session.set('wallFile', null);
  },

  'click #postButton' : function(e, tmpl) {
    e.preventDefault();

    var body = tmpl.find("#wallPostTextArea").value
    if (body === "" && !Session.get('wallFile')) {
      return;
    }

    var newWallPost = {
      body: body
    };

    if (Meteor.user().username !== "") {
      newWallPost.username = Meteor.user().username;
    }

    if (Session.get('wallFile')) {
      var id = Session.get('wallFile');
      newWallPost.attachedFileId = id;
      Session.set('wallFile', null);
    }

    // Clear out the old message
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
