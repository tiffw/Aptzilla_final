// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Apartment model
var db = require("../models");


module.exports = function(app) {


	app.get("/api", function(req,res){


		//console.log("This is REQ: " + JSON.stringify(req,null, '\t'));
		console.log("----------------");
		console.log("This is req.query: " + JSON.stringify(req.query,null,'\t'));

		var query = {};

		// if(req.query.address) {
		// 	query.address = req.query.address;
		// }

		if(req.query.price) {
			query.price = req.query.price;
		}


		if(req.query.bedroom) {
			query.bedroom = req.query.bedroom;
		}


		if(req.query.city) {
			query.city = req.query.city;
		}


		if(req.query.state) {
			query.state = req.query.state;
		}


		// if(req.query.zip) {
		// 	query.zip = req.query.zip;
		// }


		// if(req.query.lat) {
		// 	query.lat = req.query.lat;
		// }


		// if(req.query.longitude) {
		// 	query.longitude = req.query.longitude;
		// }


		// if(req.query.image_url) {
		// 	query.image_url = req.query.image_url;
		// }


		console.log("This is query object: " + JSON.stringify(query,null,'\t'));



		// now you have the query object and you will make a request
		db.Apartment.findAll({

			where: query


		// here you will receive data from the database and just send it to "apartments.js"
		}).then(function(receivedFromDatabase){
			res.json(receivedFromDatabase);
			console.log("This will be receivedFromDatabase and send to the front: " + JSON.stringify(receivedFromDatabase,null,'\t'));
		});



	});


};