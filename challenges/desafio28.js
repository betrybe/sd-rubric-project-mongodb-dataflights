db.resumoVoos.insertMany([
  { "empresa": "LATAM AIRLINES BRASIL", "totalVoosDomesticos": db.voos.find({ "natureza": "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" }).count() }
]);
db.resumoVoos.findOne({ "empresa": "LATAM AIRLINES BRASIL" }, { "_id": false });
