// Query 3

// Get the top 10 repos with the most pull requests

db.pull_requests.aggregate()
    .group({
          _id: "$repo",
          nb_pull_requests:{$sum:1}
    })
    .sort({nb_pull_requests:-1})
    .limit(10)
    .project({
        _id:0,
        repo_name: "$_id",
        Number_of_pull_requests:"$nb_pull_requests"
    });