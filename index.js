const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
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
require("./routes/time-routes.js")(app);

mongoose.connect('mongodb://heroku_5d4vj37d:poartpmu8os1cokg44ajpajpck@ds163679.mlab.com:63679/heroku_5d4vj37d', {
  useMongoClient: true,
}).then(function() {
	console.log('Mongo connected via mongoose')
})

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening on ${port}`);



