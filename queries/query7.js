// Query 7

// List of watchers of each repo

db.repos.aggregate()
    .match({watchers:{$gt:0}})
    .lookup({
          from: "watchers",
          localField: "name",
          foreignField: "repo",
          as: "List_of_Watchers"
    })
    .project(
        {
            _id:0,
            "Repo": "$name",
            "List_of_Watchers":1,
        });