var allsigns = require("../models/Allsigns.js");

module.exports = function(app) {
    // ---------- Monday
    app.get("/onethirtypm", function(req, res) {
        allsigns.find({
            "properties.T": /-10:30AM/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.984044, 40.676691]
                    },
                    $maxDistance: 500 * 1.60934
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                /*console.log(doc)*/
                res.json(doc);
            }
        }).limit(10000);
    });

  }