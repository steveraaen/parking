var Hood = require("../models/Hoods.js");

module.exports = function(app) {
    app.get("/onehood", function(req, res) {
        Hood.find({ name: 'Bedford' }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
                res.json(doc);
            }
        });
    });

   app.get("/currenthood", function(req, res){
    Hood.findOne({
        geometry: {
            $geoIntersects: {
                $geometry: {
                    type: "Point",
                    coordinates: [-73.93414657, 40.82302903]
                },
            },
        },
    });
    }) 


    /*    app.get("/allwithin", function(req, res) {
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
                    console.log(doc)
                    res.json(doc);
                }
            }).limit(100);
        });*/
}