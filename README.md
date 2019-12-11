# liri-node-app
LIRI Bot

The LIRI Bot helps you find information on your favorite songs, movies, and concerts. 

## Table of Contents
* [About](#about)
* [Functionality](#functionality)
* [Technical Features](#technical-features)
* [Requirements](#requirements)
* [Build Tools](#build-tools)
* [Acknowledgements](#acknowledgements)


## About
This command-line only application will prompt the user to one of three API's based on whether they want to find a movie,
a song, or a concert. Based on the inputs, the API will grab the first result and give the user a brief summary of information
on that request. Look up previous results in a `log.txt` file that will create after the user's first query.

## Functionality
Start the program by running `node liri.js` in the command line in the directory of the file. The following screenshots show
the results of each function.

* Lookup a movie
<img src="/images/movie-input.gif">

* Lookup a movie with the default input
<img src="/images/movie-no-input.gif">

* Lookup a concert
<img src="/images/concert-input.gif">

* Lookup a concert with the default input
<img src="/images/concert-no-input.gif">

* Lookup a song
<img src="/images/song-input.gif">

* Lookup a song with the default input
<img src="/images/song-no-input.gif">

* Run the random task
<img src="/images/random.gif">

* View the `log.txt` file
<img src="/images/log.gif">

## Technical Features
* This is a command-line only application.
* The `inquirer` package prompts the user to decide what action to take - the options are to Lookup a Concert, a Song, a
Movie, or a random action. The random action will read the `random.txt` to determine its actions.
* The function to lookup a concert will access the Bands-in-Town API (http://www.artists.bandsintown.com/bandsintown-apiv).
* The function to lookup a movie will access the OMDB API (http://www.omdbapi.com).
* The function to lookup a song will access the Spotify API (https://developer.spotify.com).
* Each time the program runs, the results will be appended to the `log.txt` file. 

## Requirements
In order to run, you will need to clone or fork this repository to your local machine. You will need to run:
`npm install`
in the local folder.

Additionally, the Spotify API requires a personalized API key. Please do the following steps to ensure your songs can be retrieved:
   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

* Step Five: Create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

## Build Tools
* Node.js v10.16.3
* Node packages:
  * axios v0.19.0 (https://www.npmjs.com/package/axios)
  * dotenv v8.2.0 (https://www.npmjs.com/package/dotenv)
  * inquirer v.7.0.0 (https://npmjs.com/package/inquirer)
  * moment v2.24.0 (https://www.npmjs.com/package/moment)
  * node-spotify-api v1.1.1 (https://www.npmjs.com/package/node-spotify-api)


## Acknowledgements
* Thanks to all of the authors of Node.js packages - they are invaluable.