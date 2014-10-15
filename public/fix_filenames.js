print("Fixing filenames.");
function fixFilename(obj) {
    var key = obj.copies.wallPostFileData["key"];
    var filename = obj.copies.wallPostFileData["name"];

    var setFilename = function(gridObj) {
      print("Updating grid item filename from " + gridObj["filename"] + " to " + filename + ".");
      db.cfs_gridfs.wallPostFileData.files.update({"_id":gridObj._id}, {
         $set: {"filename" : filename}
      });
    }

    db.cfs_gridfs.wallPostFileData.files.find({"filename":key}).forEach(setFilename);
}
db.cfs.wallPosts.filerecord.find({"copies.wallPostFileData.key":{$ne:null}}).forEach(fixFilename);
