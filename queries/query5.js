// Query 5

// Repos with number of collaborators greater than 20

db.repo_collaborators.aggregate()
    .group({
          _id: "$repo",
          nb_collaborators:{$sum: 1}
    })
    .match({"nb_collaborators":{$gt:20}})
    .sort({nb_collaborators:-1})
    .project({
        _id:0,
        repo_name:"_id",
        Number_ofCollaborators:"$nb_collaborators"
    });