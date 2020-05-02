//Routes
var path = require ('path');

function htmlRoute (app) {
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});
}
module.exports = htmlRoute;
