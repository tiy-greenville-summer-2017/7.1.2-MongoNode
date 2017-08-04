const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/newdb", (error, db) => {
  const col = db.collection("restaurants");

  col.find({}).toArray((error, results) => {
    // console.log(results);
  });

  col.findOne({}, (error, results) => {
    console.log(results);
  })

});
