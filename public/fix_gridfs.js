print("Fixing GridFS filenames.");
function fixFilename(obj){
    var value = obj["filename"];
    var newValue = value;
    if (value.substring(0, 9) == 'wallPosts') {
      newValue = value.substring(9);
      print("Original: " + value + ", New: " + newValue);
      /*WallPostsFS.update({"_id":obj._id}, {
         $set: {"filename" : newValue}
      });*/
      db.cfs_gridfs.wallPostFileData.files.update({"_id":obj._id}, {
         $set: {"filename" : newValue}
      });
    }
    else {
      print("Skipped update.  Substring was: " + value.substring(0, 9));
    }
}
//WallPostsStore.find({"filename":{$ne:null}}).forEach(fixFilename);
db.cfs_gridfs.wallPostFileData.files.find({"filename":{$ne:null}}).forEach(fixFilename);
