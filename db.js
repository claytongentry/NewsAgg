// Connect db
var mongo_uri = process.env.MONGOLAB_URI;
var db = mongojs(mongo_uri, ['pieces']);

module.exports.db = db;
