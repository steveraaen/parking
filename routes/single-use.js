var signcodes = require("../models/Signcodes.js");
        // ----------- get count of each distinct MUTCD code - 
        //        then modified in BBEdit and loaded into mongo -------------

    module.exports = function(app) {
        app.get('/mutsandt', function(req, resp) {
            console.log("hello")
            allsigns.aggregate([{
                "$group": {
                    _id: "$properties.MUT",
                    text: { $addToSet: "$properties.T" },
                    count: { $sum: 1 }
                }
            }], function(error, doc) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(doc)
                    resp.json(doc);
                }
            })
        })
    }