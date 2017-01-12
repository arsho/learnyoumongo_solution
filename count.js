var passed_age = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require("mongodb").MongoClient;
mongo.connect(url,function(connect_err, db){
   if (connect_err) throw connect_err;
   var parrots = db.collection("parrots");
   parrots.count({
        age: {
            $gt: passed_age
        }  
   },function(count_err,data){
      if (count_err) throw count_err;
      console.log(data);
      db.close();
   });
});