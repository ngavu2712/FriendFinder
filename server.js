var express = require('express');
var path = require('path');

//Set up express App
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());



//Start the server to begin to listen
app.listen(PORT, function(){
    console.log("App listening on port: http://localhost:" + PORT)
})
