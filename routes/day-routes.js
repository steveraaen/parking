var allsigns = require("../models/Allsigns.js");


module.exports = function(app) {

// ---------------- test
app.get('/test/', function(req, res) {

 console.log(req.query);

 function doit() {
    console.log(req.query.coordinates)
    var c1 = req.query.coordinates;
    var c2= c1.split(",")
    console.log(c1)
    var coords = c2.map((ll) => {

        return parseFloat(ll)

    })
    console.log(coords[0])
 allsigns.find({
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [coords[0], coords[1]]
                    },
                    $maxDistance: 750
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log('doc   :' + doc)
                res.json(doc);
            }
        }).limit(5000);
}
doit()

})
    // ---------- Monday
    app.get("/mon", function(req, res) {
        allsigns.find({
            "properties.T": /MON/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.983907, 40.676645]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(1000);
    });
    // ---------- Tuesday
    app.get("/tue", function(req, res) {
        allsigns.find({
            "properties.T": /TUE/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.983907, 40.676645]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(1000);
    });
    // ---------- Wednesday
    app.get("/wed", function(req, res) {
        allsigns.find({
            "properties.T": /WED/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.983907, 40.676645]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(1000);
    });
    // ----------- Thursday
    app.get("/thu", function(req, res) {
        allsigns.find({
            "properties.T": /THU/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.983907, 40.676645]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(1000);
    });
    // ---------- Friday
    app.get("/fri", function(req, res) {
        allsigns.find({
            "properties.T": /FRI/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.983907, 40.676645]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(1000);
    });
    // ---------- Saturday
    app.get("/sat", function(req, res) {
        allsigns.find({
            "properties.T": /SAT/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.983907, 40.676645]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(1000);
    });
}



