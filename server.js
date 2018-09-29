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
app.get("/api/reservations", function(req, res) {
    res.json(reservations);
});

// /api/waitlist
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

// Create reservation - takes in JSON input
app.post("/api/reservations", function(req, res) {
	// req.body hosts is equal to the JSON post sent from the user
	// This works because of our body parsing middleware
	var newReservation = req.body;
  	// Using a RegEx Pattern to remove spaces from newCharacter
	// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
	// newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
      console.log(newReservation);

      console.log(reservations.length);
      
    if (reservations.length < 4 ){

        console.log("Yay! You are officially booked!");
        reservations.push(newReservation);
        console.log(reservations.length);
        res.json(newReservation);
    
    }
    else{
        console.log("Sorry you are on the wait list");
        reservations.push(waitlist);
        //res.json(waitlist);
    }
  
  });

// Create a set of routes for displaying the HTML pages

// Home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Reserve
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Tables // Displays all reservation
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "Tables.html"));
});

// Starts the server to begin listening
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });