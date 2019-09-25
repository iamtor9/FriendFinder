// create path as a variable
//import "path" modules from node_modules:
const path = require("path");

// This will exports a function with the routes of 'home' and 'survey' html files:
module.exports = function(app) {

//route for the survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
 });

//route for homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
 });
};

//my first mess up below :)
// Your htmlRoutes.js file should include two routes:
// const http = require('http');
// const express = require('express');
// const api = require('./routes/api');
// const app = express();

// A GET Route to /survey which should display the survey page.

// get.route.display("survey.html");

// A default, catch-all route that leads to home.html which displays the home page.