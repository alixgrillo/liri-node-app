require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");



inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "What would like to do?",
        choices: ['Lookup a Concert', 'Lookup a Song', 'Lookup a Movie', 'Random Action'],
    }
]).then(function (response) {
    switch (response.action) {
        case "Lookup a Concert":
            concert();
            break;
        case "Lookup a Song":
            spotify();
            break;
        case "Lookup a Movie":
            movie();
            break;
        case "Random Action":
            randomAction();
            break;
    }
})

function concert() {
    inquirer.prompt([
        {
            type: "input",
            message: "What concert do you want to see?",
            name: "artist"
        }
    ]).then(function (response) {
        var artist = response.artist;
        if (artist === "") {
            artist = "Celine Dion";
        }
        findConcert(artist);
    })
    
}
function findConcert(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (apiResponse) {
            var concert = apiResponse.data[0];
            var concertDate = moment(concert.datetime, "YYYY-MM-DDTHH:mm:ss");

            var output = "\n-------------\nArtist: " + artist + "\nName: " + concert.venue.name +       
                "\nVenue Location: " + concert.venue.city + ", " + concert.venue.region + "\nDate: " 
                + concertDate.format("MM/DD/YYYY") + "\n-------------\n";

            console.log(output);
            writeToFile(output);
            // console.log("\n-------------\n");
            // console.log("Artist: " + artist + "\nName: " + concert.venue.name + "\nVenue Location: " + concert.venue.city + ", " +
            //     concert.venue.region + "\nDate: " + concertDate.format("MM/DD/YYYY"));
            // console.log("\n-------------\n");

        }
    ).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
}

function movie() {
    inquirer.prompt([
        {
            type: "input",
            message: "What movie do you want to see?",
            name: "movie"
        }
    ]).then(function (response) {
        var movie = response.movie;
        if (movie === "") {
            movie = "Mr. Nobody";
        }
        findMovie(movie);
    })
}
function findMovie(movie) {
    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(
        function (apiResponse) {
            var movie = apiResponse.data;

            var rottonTomatoes = findObjectByValue(movie.Ratings, "Source", "Rotten Tomatoes").Value;

            console.log("\n-------------\n");
            console.log("Title: " + movie.Title + "\nYear: " + movie.Year + "\nIMDB Rating: " + movie.imdbRating +
                "\nRotten Tomatoes Rating: " + rottonTomatoes + "\nCountry: " + movie.Country + "\nLanguage: " +
                movie.Language + "\nPlot: " + movie.Plot + "\nActors: " + movie.Actors);
            console.log("\n-------------\n");
        }
    ).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    })
}

function spotify() {
    inquirer.prompt([
        {
            type: "input",
            message: "What song do you want to know about?",
            name: "song"
        }
    ]).then(function (response) {
        var song = response.song;
        if (song === "") {
            song = "The Sign";
        }
        runSong(song);
    })
}

function runSong(song) {
    var spotify = new Spotify(keys.spotify);
    spotify
        .search({ type: 'track', query: song, limit: 1 })
        .then(function (response) {
            //console.log(response.tracks.items[0]);
            var songInfo = response.tracks.items[0];
            //console.log(songInfo);

            console.log("\n-------------\n");
            console.log("Artist: " + songInfo.artists[0].name + "\nSong Name: " + songInfo.name + "\nLink to song: " +
                songInfo.href + "\nAlbum: " + songInfo.album.name);
            console.log("\n-------------\n");

        })
        .catch(function (err) {
            console.log(err);
        });
}

function randomAction() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(error);
        }
        dataArr = data.split(",");
        for(var i = 0; i<dataArr.length/2; i++){
            var action = dataArr[2*i];
            var input = dataArr[2*i+1].replace('"','');

            switch (action) {
                case "concert-this":
                    console.log(input);
                    findConcert(input);
                    break;
                case "spotify-this-song":
                    runSong(input);
                    break;
                case "movie-this":
                    findMovie(input);
                    break;
            }
        }

    })
}

function findObjectByValue(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
function writeToFile(text){
    fs.appendFile("log.txt", text, function(err){
        if (err) {
            console.log(err);
          }
    })
}