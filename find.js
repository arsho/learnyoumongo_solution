var url = "mongodb://localhost:27017/learnyoumongo";
var passed_age = parseInt(process.argv[2]);
var mongo = require("mongodb").MongoClient;
mongo.connect(url, function(connect_err, db){
    if (connect_err) throw connect_err;
    var parrots = db.collection("parrots");
    parrots.find({
        age: {$gt: passed_age}
    }).toArray(function(find_err,data){
        if (find_err) throw find_err;
        console.log(data);
        db.close();
    })
});