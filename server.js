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
// /api/reservations
// /api/waitlist
// Create a set of routes for displaying the HTML pages
// Use jQuery to run AJAX calls to GET and POST data from users to the Express server
