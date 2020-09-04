// db.voos.find({ "ano": { "$in": [2017, 2018] } }).count();
db.voos.find({ "ano": {"$gte": 2017, "$lte": 2018} }).count();
