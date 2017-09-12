var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
body: {}
});

var Places = mongoose.model("Places", PlacesSchema);
module.exports = Places;