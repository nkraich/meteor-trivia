console.log("Fixing CFS file keys.");
function fixKey(obj){
    var value = obj.copies.wallPostFileData["key"];
    var newValue = value;
    if (value.substring(0, 9) == 'wallPosts') {
      newValue = value.substring(9);
      console.log("Original: " + value + ", New: " + newValue);
      /*WallPostsFS.update({"_id":obj._id}, {
         $set: {"copies.wallPostFileData.key" : newValue}
      });*/
    }
    else {
      console.log("Skipped update.  Substring was: " + value.substring(0, 9));
    }
}
WallPostsFS.find({"copies.wallPostFileData.key":{$ne:null}}).forEach(fixKey);
