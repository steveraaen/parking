var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signcodeSchema = new Schema({
	_id: {
			type: Schema.Types.ObjectId,
			ref: "allsigns"
},

	MUT: {
			type: String,
			required: true
},
	text: String,
	count: Number
});

var signcodes = mongoose.model("signcodes", signcodeSchema);

module.exports = signcodes;