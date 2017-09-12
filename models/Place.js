var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
<<<<<<< HEAD
body: {}
=======

>>>>>>> 69db8b2023972553e7b87a7d232b3c1e57aef1cb
});

var Places = mongoose.model("Places", PlacesSchema);
module.exports = Places;