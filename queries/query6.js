// Query 6

// List of Followers of each users

db.users.aggregate()
    .match({followers:{$gt:0}})
    .lookup({
          from: "followers",
          localField: "login",
          foreignField: "follows",
          as: "List_of_Followers"
    })
    .project(
        {
            _id:0,
            "User": "$login",
            "List_of_Followers":1,
        });