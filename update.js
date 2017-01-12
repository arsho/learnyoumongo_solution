var dbname = process.argv[2];
var url = "mongodb://localhost:27017/"+dbname;
var mongo = require("mongodb").MongoClient;
mongo.connect(url,function(connect_err, db){
    if (connect_err) throw connect_err;
    var users = db.collection("users");
    users.update({
        "username": "tinatime"
    },{
        $set:{
            age: 40
        }
    },function(update_err,data){
        if (update_err) throw update_err;
        db.close();
    });
});