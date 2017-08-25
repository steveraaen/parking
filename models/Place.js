var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({

    annotations: {},
    bounds: {},
    components: {},
    confidence: Number,
    formatted: String,
    geometry: {}
});

var Place = mongoose.model("Place", PlaceSchema);
module.exports = Place;