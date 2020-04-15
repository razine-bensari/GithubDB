//Query 1

// Get the top 10 most popular programing languages out of all the repos present in the database

db.repos.aggregate([
 {
     $group: {
         _id: "$language",
         Frequency:{$sum: 1}
     },
 },
 {
     $sort: {Frequency:-1}
 },
 {
     $limit: 10
 }
]);