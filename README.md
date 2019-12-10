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
The animal GIF page allows the user to see 10 randoms GIFs (hard-G) of their favorite animals. The search
is based on the text on the buttons. When the page loads, there will be 8 buttons to start, and the user can 
click any of the button to render the GIFs. Note - if you want to see more GIFs, hit the same animal more
than once! Each time you chose an animal, 10 more GIFs will produce than the last time.

<img src="/assets/images/giphy-game.gif">

## Functionality
Once the GIFs load, they will all be still images. To animate the images, click on any of images, and they 
will animate. By click on the image again, it will return to the still state. Go ahead and animate all of the
images at once!

<img src="/assets/images/giphy-pics.gif">

Add a new word by using the form and clicking the Add! button. A new button will appears and it will pull in 
GIFs for the new search term.

<img src="/assets/images/giphy-newWord.gif">

If you don't like any of the search terms, you can delete a button by hovering over the button and clicking
the black X close button that generates. Take note that the parent button with the search term will not 
activate the GIFs when the close button is clicked. 

<img src="/assets/images/giphy-deleteWord.gif">

## Technical Features
* Buttons are dynamically created using an array of items and generating the button through JQuery.
* JQuery `$.ajax` function is used to call the GIPHY API to generate the specified number of GIFs.
* HTML element `data` attribute utilized to store animated and still URLs for GIF to allow GIF to switch based
on a click.
* Leveraged `.slice()` function to allow the user to delete a button.

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
* [axios] v0.19.0 (https://www.npmjs.com/package/axios)
* [dotenv] v8.2.0 (https://www.npmjs.com/package/dotenv)
* [inquirer] v.7.0.0 (https://npmjs.com/package/inquirer)
* [moment] v2.24.0 (https://www.npmjs.com/package/moment)
* [node-spotify-api] v1.1.1 (https://www.npmjs.com/package/node-spotify-api)


## Acknowledgements
* Thanks to all of the authors of Node.js packages - they are invaluable.