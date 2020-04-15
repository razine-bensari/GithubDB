// Query 10

// Average Number of  Issues Per Day 

db.issues.aggregate([
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
      nb_issues:{$sum:"$NumberOfTimes"},
      nb_days:{$sum: 1},
      avgIssues: { $avg: "$NumberOfTimes" }
})
.project({_id:0,
"Number of Issues": "$nb_issues",
"Number of days": "$nb_days",
"Average Issues per Day":"$avgIssues"});