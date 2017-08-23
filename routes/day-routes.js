var allsigns = require("../models/Allsigns.js");


module.exports = function(app) {

// ---------------- test
app.get('/test/', function(req, res) {
 function doit() {
/*    console.log(req.query.coordinates)
    var c1 = req.query.coordinates;
    var c2= c1.split(",")
    console.log(c1)
    var coords = c2.map((ll) => {

        return parseFloat(ll)

    })
    console.log(coords[0])*/
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
    app.get("/mon/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        allsigns.find({
            "properties.T": /MON/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 2000
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
    // ---------- Tuesday
    app.get("/tue/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        allsigns.find({
            "properties.T": /TUE/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 20000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
               /* console.log(doc)*/
                res.json(doc);
            }
        }).limit(20000);
    });
    // ---------- Wednesday
    app.get("/wed/:coordinates?", function(req, res) {

        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        console.log(lat, lng)
        allsigns.find({
            "properties.T": /WED/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
               /* console.log(doc)*/
                res.json(doc);
            }
        }).limit(1000);
    });
    // ----------- Thursday
    app.get("/thu/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        allsigns.find({
            "properties.T": /THU/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
               /* console.log(doc)*/
                res.json(doc);
            }
        }).limit(1000);
    });
    // ---------- Friday
    app.get("/fri/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        allsigns.find({
            "properties.T": /FRI/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                /*console.log(doc)*/
                res.json(doc);
            }
        }).limit(1000);
    });
    // ---------- Saturday
    app.get("/sat/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        allsigns.find({
            "properties.T": /SAT/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 5000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
               /* console.log(doc)*/
                res.json(doc);
            }
        }).limit(1000);
    });
}



