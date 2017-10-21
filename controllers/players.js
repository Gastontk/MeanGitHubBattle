console.log('Loading /controllers/messages.js');
var mongoose = require('mongoose');
require('../models/player.js');
var Player = mongoose.model('Player');




module.exports = {
	// gitmonauts:arPlayer];
	index: function(req, res){
//for db seeding
		// var newPlayer = new Player({_id:1, name:'FIRST gitmonaut',score:8, image:'https://avatars2.githubusercontent.com/u/11015843?s=400&u=a7be297495477f9e0d5a041f440f436efb3c9596&v=4'});

		// newPlayer.save(function (err, player) {
		//   if (err) return console.error(err);
		//   else{
		//   	console.log('saved ', player);
		//   }
		// });


		Player.find({}, null, {sort:{score:'descending'}},function (err, players){
			if(err){
				console.log('Error getting players', err)
			}else{
				res.json(players);  

			}
	  	});
		// res.json(gitmonauts);
		// console.log('Gitmonauts are: ', players)

		// .populate('_comments').exec(function(err, messages){
		//       res.json('index.ejs', {messages: messages});
		// });
	},

	create: function(req, res){




		// console.log('In create()',req.body);
		var player = new Player({id: req.body.id, name: req.body.name, score: req.body.score, image:req.body.image});
		this.player = player;
		console.log('create()', player, req.body.id);
		Player.find({},function (err, players){
			if(err){
				console.log('Error getting players', err)
			}else{
				console.log('found players', players);
				for(var x = 0; x< players.length; x++){
					console.log(x,players[x].name)
					if(players[x].id == player.id){
						console.log('found', player.id)
						return
					}

				}
				player.save(function(err){
					if(err){
						console.log(err);
					}
				})

			}
	  	});



//check if player is already in db
		// Player.findOne({'id':req.body.id},function (err, newPlayer){
		// 	// console.log('Found a player', newPlayer);
			
		// 	if(err){ 

			// player.save(function(err){
			// 		if(err){
			// 			console.log('Didnt save player',err);
			// 			// res.render('index.ejs', {errors: newMessage.errors});
			// 		} else {
			// 			console.log("success", player);
			// 			// res.redirect('/');
			// 		}
			// })
			// console.log('Error getting player.Gonna add player', err)
		// 	// }else{
		// 	// 	console.log('found', newPlayer)
		// 	// 	return

		// 	}else{
		// 		console.log('found one', newPlayer);
		// 	}

	 //  	});




		// console.log('player to be saved is', player);
		
	}


}