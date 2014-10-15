print("Fixing CFS updatedAt.");
function fixUpdatedAt(obj){
    var value = obj["updatedAt"];
    db.cfs.wallPosts.filerecord.update({"_id":obj._id}, {
       $set: {"original.updatedAt" : value},
       $unset: {"updatedAt":1} 
    });
    print("Changed record.");
}
db.cfs.wallPosts.filerecord.find({"updatedAt":{$ne:null}}).forEach(fixUpdatedAt);
