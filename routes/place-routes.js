var Hood = require("../models/Hoods.js");
var Place = require("../models/Place.js");


module.exports = function(app) {
/*
    app.get('/ocage', function(req, res) {
        console.log(res)
    }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
                res.json(doc);
            }
        });
    
*/
    // ---------------------------------
    app.get('/userloc/:coordinates?', function(request, response){
        console.log(parseFloat(request.query.coordinates[0]).toFixed(6));
       
        var lat = parseFloat(request.query.coordinates[0]).toFixed(6)
        var lng = parseFloat(request.query.coordinates[1]).toFixed(6)
        console.log(lng, lat)
            Hood.findOne({
        geometry: {
            $geoIntersects: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
            },
        },
    }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
                response.json(doc);
            }
        });
    })

        // ---------------------------------------------------
    app.get("/allwithin/:polycoords?", function(req, res) {
        allsigns.find({

            geometry: {
                $geoWithin: {
                    $geometry: {
                        type: "Polygon",
                        coordinates: [flatbush.geometry]
                    }
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                /*console.log(doc)*/
                res.json(doc);
            }
        }).limit(100);
    });
}
  