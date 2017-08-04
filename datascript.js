const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/newdb", (error, db) => {
  const col = db.collection("djjazzyjoel");

  col.insert({name: "Joel", hair: "frizzy"});
});
