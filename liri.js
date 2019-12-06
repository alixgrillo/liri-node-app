require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);