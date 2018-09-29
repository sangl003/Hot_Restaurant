// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a few array variables that will hold the data
var reservations = [
	{
		"customerName": "Oprah",
		"customerEmail": "harpo@dynamix.biz",
		"customerID": "OoOoO",
		"phoneNumber": "505-555-5555"
	},
	{
		"customerName": "Horace",
		"customerEmail": "hdogg@professionalbasketball.tv",
		"customerID": "hdogg",
		"phoneNumber": "505-555-5555"
	}
];

var waitlist = [
	{
		"customerName": "Jeffney Drangus",
		"customerEmail": "hunk@channelfive.com",
		"customerID": "JEFF",
		"phoneNumber": "505-555-5555"
	},
	{
		"customerName": "Lola X",
		"customerEmail": "secretspy@unitedstates.gov",
		"customerID": "Agent L",
		"phoneNumber": "505-555-5555"
	}
];

// Create a set of routes for getting and posting table data
// /api/reservations
// /api/waitlist

// Create a set of routes for displaying the HTML pages
// /reserve
// /tables

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });