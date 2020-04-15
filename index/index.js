// Run this query before indexing

//db.commits.find({"commit.author.date": {$gt: "2013-01-01T00:00:0Z", $lt: "2013-02-01T00:00:0Z"} }).count()


// index
db.commits.createIndex(
    {"commit.author.date": 1},  //MongoDB 4.2 wildcard index on a specific field { "field.$**" : 1 }
    {
        background:true,//Specify true to build in the background.
    }
);

// run the query above after indexing
