import { get } from "http";

// Your htmlRoutes.js file should include two routes:
const http = require('http');
const express = require('express');
const api = require('./routes/api');
const app = express();

// A GET Route to /survey which should display the survey page.

get.route.display("survey.html");

// A default, catch-all route that leads to home.html which displays the home page.