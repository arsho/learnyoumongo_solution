var dbname = process.argv[2];
var collection_name = process.argv[3];
var id = process.argv[4];
var url = "mongodb://localhost:27017/"+dbname;
var mongo = require("mongodb").MongoClient;
mongo.connect(url,function(connect_err,db){
    if (connect_err) throw connect_err;
    var col = db.collection(collection_name);
    col.remove({
        _id: id     
    },function(remove_err,data){
        if (remove_err) throw remove_err;
        db.close();
    });
})