var url = "mongodb://localhost:27017/learnyoumongo";
var passed_first_name = process.argv[2];
var passed_last_name = process.argv[3];
var new_doc = { firstName: passed_first_name, lastName: passed_last_name};
var mongo = require("mongodb").MongoClient;
mongo.connect(url,function(connect_err,db){
   if (connect_err) throw connect_err;
   var docs = db.collection("docs");
   docs.insert(new_doc,function(insert_err,data){
       if (insert_err) throw insert_err;
       console.log(JSON.stringify(new_doc));
       db.close();
   })
});