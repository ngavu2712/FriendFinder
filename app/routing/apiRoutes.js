//Builtin require function is the easiest way to include modules that exist in separate files.
var friends = require ("../data/friends.js") // Import and execute the friends.js
function apiRoute (app) {

app.get("/api/friends", function(req,res){
    return res.json(friends);
 })
 
 //Post request handle incoming survey result 
 app.post("/api/friends", function(req,res){
     var newFriends = req.body;
     console.log(newFriends);
    
     
    res.json(friends);

    // Retreive the scores from user response.
    var userScore = newFriends.scores;

    var matchName = "";
    var image = "";
    // If user meet this minimum difference, this person will be the best match. 
    var minimalDifference = 50; 
    

    // Iterrate through the scores array
    for (var i= 0; i < friends.length; i++){
       
        var totalDifference = 0;

        for (var j =0; j < userScore.length; j++){
            difference = parseInt(Math.abs(friends[i].scores[i] - userScore[j]));
            console.log(difference);
            totalDifference += difference;
            console.log(totalDifference);

        }

        if(totalDifference < minimalDifference) {
            matchName = friends[i].name;
            image = friends[i].photo;
        }

    }
    // push newFriend data from user's response after hitting submit to friends.js array
    friends.push(newFriends); 
    res.json({matchName: matchName, image: image})

 });
};

module.exports = apiRoute;


