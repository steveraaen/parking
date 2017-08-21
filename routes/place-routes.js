var Hood = require("../models/Hoods.js");

module.exports = function(app) {

    app.get('/userloc/:coordinates?', function(request, response){
        console.log(parseFloat(request.query.coordinates[0]))
            Hood.findOne({
        geometry: {
            $geoIntersects: {
                $geometry: {
                    type: "Point",
                    coordinates: [parseFloat(request.query.coordinates[0]), parseFloat(request.query.coordinates[1])]
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
  