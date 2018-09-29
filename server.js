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
var reservations = [{
    name: "Ryan",
    phone: "545-899-4546",
    email: "ryan@test.com",
    uniqueid: "1"

}];
var waitlist = [];

// Create a set of routes for getting and posting table data

// /api/reservations
app.get("/api/reservations", function(req, res) {
    res.json(reservations);
});

// /api/waitlist
<<<<<<< HEAD
app.get("/waitlist", function(req, res) {
    return res.json(waitlist);
  });
=======
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

>>>>>>> b6885a1588b925c15cb2facda26fab2722631570
// Create a set of routes for displaying the HTML pages

<<<<<<< HEAD
// Use jQuery to run AJAX calls to GET and POST data from users to the Express server

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
=======
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
>>>>>>> b6885a1588b925c15cb2facda26fab2722631570
