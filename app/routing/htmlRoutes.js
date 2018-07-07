var path = require('path');

module.exports = function(app) {

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });	
    // catch all route to take you home! That's a good place to be. 
    app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "../public/home.html"));
	});
    app.get("/:any", function(req, res) {
		res.sendFile(path.join(__dirname + "../public/home.html"));
	});

};