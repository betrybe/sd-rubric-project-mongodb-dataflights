db.voos.find({ "litrosCombustivel": { "$lte": 1000, "$exists": true } }, { "_id": false, "vooId": true, "litrosCombustivel": true }).limit(1);
