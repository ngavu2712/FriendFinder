var express = require('express');
//var path = require('path');

//Set up express App
var app = express();
var PORT =  process.env.PORT || 8000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(express.static("app/public"))

var apiRoute = require ("./app/routing/apiRoutes")
apiRoute(app);

var htmlRoute = require("./app/routing/htmlRoutes")(app)

//Start the server to begin to listen
app.listen(PORT, function(){
    console.log("App listening on port: http://localhost:" + PORT)
})

