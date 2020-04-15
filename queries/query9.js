// Query 9

// Average Number of Pull Requests Per Day

db.pull_requests.aggregate([
 { $group: {
 _id: {
 $add: [
 { $dayOfYear: "$created_at"},
 { $multiply:
 [400, {$year: "$created_at"}]
 }
 ]},
 NumberOfTimes: { $sum: 1 },
 f: {$min: "$created_at"}
 }
 },
]).group({
      _id: null,
      nb_pullerquests:{$sum:"$NumberOfTimes"},
      nb_days:{$sum: 1},
      avgPullRequest: { $avg: "$NumberOfTimes" }
})
.project({_id:0,
"Number of Pull Requests": "$nb_pullerquests",
"Number of days": "$nb_days",
"Average Pull Requests per Day":"$avgPullRequest"});