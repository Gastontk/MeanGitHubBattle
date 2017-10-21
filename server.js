var express = require("express");
var app = express();
var mongoose = require("mongoose");

var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//for Angular
app.use(express.static(path.join(__dirname, "./GitHubBattle/dist")));
require('./config/mongoose_config.js');
require('./config/routes.js')(app);


	
app.listen(8000, function(){
	console.log("server running on port 8000");
});


