// Query 2

// Get the top 10 repos with the most issues

db.issues.aggregate()
    .group({
          _id: "$repo",
          nb_issues:{$sum:1}
    })
    .sort({nb_issues:-1})
    .limit(10)
    .project({
        _id:0,
        repo_name: "$_id",
        Number_of_issues:"$nb_issues"
    });