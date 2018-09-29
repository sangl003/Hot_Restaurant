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
var reservations = [];
var waitlist = [];

// Create a set of routes for getting and posting table data

// Basic route that sends the user first to the AJAX Page
// /api/Tablesview
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "Tables.html"));
  });

// /api/reservations

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });

// /api/waitlist

// Create a set of routes for displaying the HTML pages
// /reserve
// /tables

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server
<<<<<<< HEAD
=======

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });
>>>>>>> 020da5b388dc9776f5da6faeea22ce6956ee37f2
