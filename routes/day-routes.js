var allsigns = require("../models/Allsigns.js");


module.exports = function(app) {
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                /*console.log(doc)*/
                res.json(doc);
            }
        }).limit(3000);
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



