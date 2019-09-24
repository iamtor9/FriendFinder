// create path as a variable
//import "path" modules from node_modules:
const path = require("path");

// This will exports a function with the routes of 'home' and 'survey' html files:
module.exports = function(app) {
    
// Route for the survey.html page:
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
  });
// home page as default page if survey is not found
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
};

// Your htmlRoutes.js file should include two routes:
// const http = require('http');
// const express = require('express');
// const api = require('./routes/api');
// const app = express();

// A GET Route to /survey which should display the survey page.

// get.route.display("survey.html");

// A default, catch-all route that leads to home.html which displays the home page.