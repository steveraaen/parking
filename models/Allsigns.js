var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var allsignSchema = new Schema({
	properties: {
		B: {type: String, required: true},
		ID: {type: Number, required: true},
		MUT: {type: String, required: true},
		T: {type: String, required: true}

	},
	geometry: { 
		coordinates: {type: [Number], index: '2dsphere'}
	}
});

var allsigns = mongoose.model("allsigns", allsignSchema);

module.exports = allsigns;