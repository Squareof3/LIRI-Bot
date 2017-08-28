var keys = require("./keys.js");

var Twitter = require('twitter');

var spotify = require('spotify');

var getMyTweets = function() {

var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'sadcuzkirito'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
            console.log(' ');
            console.log(tweets[i].text);
        }
    }
});

}

var getArtistNames = function(artist) {
    return artist.name;
}

var getMeSpotify = function(songName) {

spotify.search({type: 'track', query: songName}, function(err, data) {
    if (err) {
        console.log("Error occured" + err);
        return;
    }
    console.log(data.tracks.items[0]);
    for (var i=0; i<songs.length; i++) {
        console.log(i);
        console.log('artist(s): ' + songs[i].artists.map(getArtistNames));
        console.log('song name: ' + songs[i].name);
        console.log('preview song: ' + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("----------------------------------------------");
    }
});
}

var getMeMovie = function(movieName) {
    request("http://ww.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json", funciton(error, response, body) {
        if (!error && response.statusCode === 200) {

        }
    });
}

var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'my-tweets':
            getMyTweets();
            break;
        case 'spotify-this-song':
        getMeSpotify(functionData);
        break;
        default:
        conosle.log('LIRI does not know that');
    }
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);