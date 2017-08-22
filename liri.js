var myKeys = require("./keys.js");

function twitter() {
    var twitterAPI = require("node-twitter-api");
    var twitter = new twitterAPI({
        consumerKey: "Y1iRxreHNhxFLV1LGfdibMXAm",
        consumerSecret: "0170c4c183ca4f8e96648a3a15eae082"
    });

    titter.getTweets("home_timeline", {
        screen_name: "sadcuzkirito",
        user_id: "	898247237045821444"
    })
}

var request = require("./request");

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}
var queryUrl = "http://www.omdbapo.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

request(queryUrl, funciton(error, response, body) {
    if (!error && response.statuscode === 200) {
        console.log()
    }
})