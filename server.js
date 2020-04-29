var express = require('express');
var path = require('path');

//Set up express App
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//Routes
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"))
})
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"))
});


//Start the server to begin to listen
app.listen(PORT, function(){
    console.log("App listening on port: http://localhost:" + PORT)
})
