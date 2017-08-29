var signcodes = require("../models/signCodes.js");

module.exports = function(app) {

	app.get('/metrics', function(req, res)	{
        signcodes.find({}, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        });
	})
}