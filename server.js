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
<<<<<<< HEAD
var reservations = [{
    name: "Ryan",
    phone: "545-899-4546",
    email: "ryan@test.com",
    uniqueid: "1"

}];
var waitlist = [];
=======
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
>>>>>>> 0f658e2c0d675fc3be64867a135814d9b38660c4

// Create a set of routes for getting and posting table data

// /api/reservations
app.get("/api/reservations", function(req, res) {
    res.json(reservations);
});

// /api/waitlist
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

// Create a set of routes for displaying the HTML pages

// Home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Reserve
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "Reserve.html"));
});

// Tables
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "Tables.html"));
});

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server
<<<<<<< HEAD
=======

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
>>>>>>> 0f658e2c0d675fc3be64867a135814d9b38660c4
