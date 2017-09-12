var Hood = require("../models/Hoods.js");
var Places = require("../models/Place.js");
var allsigns = require("../models/Allsigns.js");
var testsigns = require("../models/Testsigns.js");


module.exports = function(app) {

<<<<<<< HEAD
        app.post('/metrics', function(req, res) {
            console.log(req.body)

            var place = new Places(req.body)
            req.body = {}
            console.log(place)
            place.save(function (err) {
              if (err) console.log(err);
             console.log('saved')
            })
        })



        app.get("/testsigns", function(req, res) {
        allsigns.find({
            "properties.T": /THU/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.984002, 40.676674]
                    },
                    $maxDistance: 500 * 1.60934
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

/*    app.get('/ocage/:placeLoc?', function(req, res) {

         var place = "Madison Square Garden"
         console.log(place)
        var queryURL = "https://api.opencagedata.com/geocode/v1/json?query=" + place + "&pretty=1&key=" + pwds.ocage;
               
        return axios.get(queryURL).then(function(response) {
            if (response.data.results) {
                console.log(response.data.results)
                return response.data.results;
            } else {
                console.log("Does not have data")
                return "";
            }
        }.bind(this));
    
        res.send(place)
    });*/
    

    // ---------------------------------
    app.get('/userloc/:coordinates?', function(request, response){
     /*   console.log(parseFloat(request.query.coordinates[0]).toFixed(6));*/
       
        var lat = parseFloat(request.query.coordinates[0]).toFixed(6)
        var lng = parseFloat(request.query.coordinates[1]).toFixed(6)
       /* console.log(lng, lat)*/
=======
    app.get('/userloc/:coordinates?', function(request, response){
       /* console.log(parseFloat(request.query.coordinates[0]).toFixed(6));*/
       
        var lat = parseFloat(request.query.coordinates[0]).toFixed(6)
        var lng = parseFloat(request.query.coordinates[1]).toFixed(6)
        /*console.log(lng, lat)*/
>>>>>>> 69db8b2023972553e7b87a7d232b3c1e57aef1cb
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
                /*console.log(doc);*/
                response.json(doc);
            }
        });
    })


    }

  

















