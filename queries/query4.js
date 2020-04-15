// Query 4

// Get the top 10 most forked repos and their owner’s name

db.repos.aggregate()
    .sort({forks_count:-1})
    .limit(10)
    .lookup({
          from: "users",
          localField: "owner.id",
          foreignField: "id",
          as: "User"
    })
    .unwind("$User")
    .project({          
          repo_name: "$name",
          Nb_Fork:"$forks_count",
          Owner_name: "$User.name"});