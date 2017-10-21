console.log('Loading /config/routes');
// var MessagesController = require('../controllers/messages.js');
var PlayersController = require('../controllers/players.js');


module.exports = function(app){
	app.get("/index", PlayersController.index);
	app.post('/player', PlayersController.create);



	// 	function(req, res){
	// 	console.log('Req.body is',req.body)


	// });
	// app.post("/message", MessagesController.create);
	// app.post("/comment/:id", CommentsController.create);
	app.get("**", function(req,res){
		res.redirect('/');
	});
}