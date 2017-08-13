var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var allsignSchema = new Schema({});

var allsigns = mongoose.model("allsigns", allsignSchema);

module.exports = allsigns;