// Query 8

// Average Number of  Commits Per Day

db.commits.aggregate([
 { $group: {
 _id: {
 $add: [
 { $dayOfYear: "$commit.committer.date"},
 { $multiply:
 [400, {$year: "$commit.committer.date"}]
 }
 ]},
 NumberOfTimes: { $sum: 1 },
 f: {$min: "$commit.committer.date"}
 }
 },
]).group({
      _id: null,
      nb_commits:{$sum:"$NumberOfTimes"},
      nb_days:{$sum: 1},
      avgCommits: { $avg: "$NumberOfTimes" }
})
.project({_id:0,
"Number of commits": "$nb_commits",
"Number of days": "$nb_days",
"Average Commits per Day":"$avgCommits"});