// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

 // if (process.env.JAWSDB_URL) {
 // 	connection = mysql.createConnection(process.env.JAWSDB_URL);
 // } else {
 // 	connection = mysql.createConnection({
 // 		host: 'localhost',
 // 		user: 'root',
 // 		password: '',
 // 		database: 'apartments_db'
 // 	});
 // };

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.get("/api/:city", function(req, res) {

//     var city = req.params.city;
//     connection.query("SELECT * FROM apartments order by id", {city}, function(err, result) {
//         var html = "<h1>Actors Ordered by ID</h1>";
//         html +="<ul>";

//         for(var i=0; i<result.length; i++) {
//             html +="<li><p>ID: " + result[i].id + "</p>";
//             html += "<p>Name: " + result[i].city  + "</p>";
//         }

//         html +="</ul>";
//         res.send(html);
//     });
// });

// app.listen(PORT);

