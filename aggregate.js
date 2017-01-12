var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require("mongodb").MongoClient;
var passed_size = process.argv[2];
mongo.connect(url,function(connect_err,db){
    if (connect_err) throw connect_err;
    var prices = db.collection("prices");
    prices.aggregate([{
        $match:{
            size: passed_size
        }
    },{
        $group:{
            _id: "average",
            avg: {
                $avg: '$price'
            }
        }
    }]).toArray(function(aggregate_err,data){
        if (aggregate_err) throw aggregate_err;
        var result = Number(data[0]["avg"]).toFixed(2);
        console.log(result);
        db.close();
    });
});