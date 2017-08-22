var Hood = require("../models/Hoods.js");
var allsigns = require("../models/Allsigns.js");

module.exports = function(app) {

    // ---------------------------------------------------
/*    app.get("/allsigns/:coordinates?", function(req, res) {
        allsigns.find({
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [ parseFloat(req.query.coordinates[0]), parseFloat(req.query.coordinates[1])]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                res.json(doc);
            }
        }).limit(5000);
    });*/

    app.get("/hoodnames", function(req, res) {
        Hood.distinct('name', function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                res.json(doc);
            }
        });
    });
// ------------------ get neighborhoods ----------------------
    app.get("/allhoods/", function(req, res) {
        Hood.find({}, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
              /*  console.log(doc)*/
                res.json(doc);
            }
        });
    });
// ------------------ get one neighborhood ----------------------
    app.get("/onehood", function(req, res) {
        Hood.find({name: 'Bedford'}, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                
                console.log(doc[0])
                res.json(doc[0]);
            }
        });
    });
}