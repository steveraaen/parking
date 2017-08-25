var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var geojhoodSchema = new Schema({});

var geojhoods = mongoose.model("geojhoods", geojhoodSchema);

module.exports = geojhoods;