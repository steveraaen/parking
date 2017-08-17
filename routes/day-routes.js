var allsigns = require("../models/Allsigns.js");


module.exports = function(app) {

// ---------------- test
app.get('/test/', function(req, res) {
 console.log(Array.isArray(req.query.coordinates));
 console.log(req.query.coordinates);

 function doit() {
    console.log(req.query.coordinates)
    var c1 = req.query.coordinates.split(',')
    console.log(c1)
    var coords = c1.map((ll) => {
        return parseFloat(ll)
    })
 allsigns.find({
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coords
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(500);
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(500);
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(500);
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(500);
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(500);
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc)
                res.json(doc);
            }
        }).limit(500);
    });
}



