Meteor.startup(function ()
{
  WallPostsFS = new FS.Collection("wallPosts", {
    stores: [new FS.Store.GridFS("wallPostFileData")],
    filter: {
      maxSize: 1048576, //in bytes
      allow: {
        contentTypes: ['image/*'],
        extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'gif', 'GIF']
      },
      onInvalid: function (message) {
        alert(message);
      }
    }
  });
});
