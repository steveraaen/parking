const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();


// ------ Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ------ Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
require("./routes/place-routes.js")(app);
require("./routes/load-routes.js")(app);
require("./routes/day-routes.js")(app);

// ------ Connect to the db
// https://www.mlab.com/databases/heroku_5d4vj37d
mongoose.connect("mongodb://heroku_5d4vj37d:poartpmu8os1cokg44ajpajpck@ds163679.mlab.com:63679/heroku_5d4vj37d");
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on ${port}`);
})