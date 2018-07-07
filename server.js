var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.text());
//require the paths to the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
