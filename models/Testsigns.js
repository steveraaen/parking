var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var testsignSchema = new Schema({
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

var testsigns = mongoose.model("testsigns", testsignSchema);

module.exports = testsigns;